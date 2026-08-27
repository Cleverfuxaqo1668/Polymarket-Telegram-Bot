const WebSocket = require('ws');

const LIVE_WS = 'wss://ws-live-data.polymarket.com';
const MIN_WHALE_AMOUNT = 50_000;

function startWhaleFeed() {
  const ws = new WebSocket(LIVE_WS, {
    headers: { Origin: 'https://polymarket.com', 'User-Agent': 'Mozilla/5.0' },
  });

  let isAlive = true;
  ws.on('pong', () => { isAlive = true; });

  const heartbeat = setInterval(() => {
    if (ws.readyState !== WebSocket.OPEN) return;
    if (!isAlive) {
      console.log('[WS] Zombie connection detected — reconnecting');
      ws.terminate();
      return;
    }
    isAlive = false;
    ws.ping();
  }, 15_000);

  ws.on('open', () => {
    console.log('[WS] Connected to Polymarket live feed');
    isAlive = true;
    ws.send(JSON.stringify({
      action: 'subscribe',
      subscriptions: [{ topic: 'activity', type: 'orders_matched' }],
    }));
  });

  ws.on('message', (raw) => {
    isAlive = true;
    let msg;
    try { msg = JSON.parse(raw.toString()); } catch { return; }
    if (msg.topic !== 'activity' || !msg.payload) return;

    const trade = msg.payload;
    if (trade.side !== 'BUY') return;

    const amount = parseFloat(trade.size || 0) * parseFloat(trade.price || 0);
    if (amount < MIN_WHALE_AMOUNT) return;

    console.log(
      `🐋 Whale trade: $${amount.toFixed(0)} on "${trade.title || trade.conditionId}" ` +
      `@ ${(parseFloat(trade.price) * 100).toFixed(1)}%`
    );
  });

  ws.on('close', () => {
    console.log('[WS] Connection closed — reconnecting in 5s');
    clearInterval(heartbeat);
    setTimeout(startWhaleFeed, 5000);
  });

  ws.on('error', (err) => console.log('[WS] Error:', err.message));
}

startWhaleFeed();
