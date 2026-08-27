<img src="https://i.ibb.co/JjPz3HGN/EKCf-Q.jpg" alt="Whale Alerts banner" width="100%">

<h1 align="center">🐋 Whale Alerts — Polymarket Trading Bot</h1>

<p align="center">
<b>A Telegram bot for Polymarket, built by an enthusiast for enthusiasts.</b><br>
Catches large whale trades in real time and lets you enter the market in one tap — no clunky confirmation chains, no delays.
</p>

<table align="center">
<tr>
<td align="center">
  <a href="https://t.me/polyprediction1_bot"><img src="https://img.shields.io/badge/Telegram-Open_the_bot-2CA5E0?logo=telegram&logoColor=white" alt="Open the bot"></a><br>
  <sub>Use the bot for free — until 10.10.2026</sub>
</td>
<td align="center">
  <a href="https://t.me/whalealerts_polymarket"><img src="https://img.shields.io/badge/Telegram-Alerts_channel-2CA5E0?logo=telegram&logoColor=white" alt="Alerts channel"></a><br>
  <sub>Subscribe to the channel</sub>
</td>
</tr>
</table>

<p align="center">
<sub>📋 For more on how it works, how to connect your wallet to Polymarket, and security — see the <b>"Terms"</b> section right inside the bot (button in the pinned menu after /start)</sub>
</p>

---

## Why

Normally, spotting a big whale trade on Polymarket and following it means manually watching the market, then clicking through a confirmation flow while the price already moves — and on Polymarket itself that confirmation popup can lag, glitch, or just not show up, so the trade signs late or not at all. This bot removes both problems:

- **It catches whale trades for you** — plugged directly into Polymarket's live trade feed, reacts within seconds.
- **It signs instantly, every time** — the wallet lives inside the bot, so a bet signs the moment you tap, with no confirmation popup to wait on or glitch out. No menu-hopping, no missed entries because the UI froze.

## Features

- 🐋 **Whale Alerts** — personal alerts for big trades: your own minimum amount (`$`) and probability range (`%`), Start/Stop with one button.
- ⚡ **Instant, glitch-free signing** — the "Place bet" button comes right inside the alert; the trade signs in a single tap with no confirmation popup to wait on. Unlike Polymarket's own UI, where that popup can lag, glitch, or fail to appear, delaying or blocking the signature — here it just goes through.
- 💸 **Fast deposits & withdrawals** — the wallet in the bot is your real Polymarket account, so it doesn't matter where you top up or withdraw — through the Polymarket website or through the bot, it's the same balance. Balance activation and signing go straight through the official [Polymarket API](https://docs.polymarket.com), without extra proxy steps — so it's faster than going through the website's own UI.
- 🔒 **Keys locked behind your own PIN** — every private key and seed phrase is automatically encrypted and stored on the server tied to your account. Access is locked behind a personal PIN code you set yourself — without it, no one can see them.
- 🤖 **Copy Trading** — follow a specific trader: the bot automatically mirrors their trades with a set budget, fixed amount, or multiplier.
- 🌐 **The whole market, live** — prices, odds, and event status stream straight over WebSocket, not on a refresh timer. No stale numbers, no reloading — you're always looking at what's happening right now, in an interface built to be fast and simple to act on.
- 🎾 **Live Sports** — a dedicated section with real-time score/status updates (tennis, football, etc.), including spread/handicap markets with clearly labeled lines.
- 🔍 **Market Search** — instantly find any event by name.
- 👛 **Built-in Wallet** — bet straight from the chat, no jumping between apps.
- 📊 **Trade History** — every bet with outcome, entry price, and P&L.
- 🌍 **10 interface languages** — en, ru, es, pt, zh, ar, fr, de, tr, uk.
- 📢 **Public Alerts Channel** — large trades ($100k+) are also posted to an open Telegram channel.

## How it works

1. The bot is subscribed to Polymarket's live WebSocket feeds (`activity` / `orders_matched`, plus live prices and sports scores) and sees every trade and price move as it happens.
2. Each trade is checked against every active user's filters (min. amount, probability range).
3. Matching users get an alert with a bet button — one tap, no confirmation form.
4. If copy trading is enabled, the bot automatically opens a position mirroring the followed trader.

See [`demo/live-feed-example.js`](demo/live-feed-example.js) for a small standalone example of the WebSocket connection itself — subscribing to the live trade feed and the zombie-connection heartbeat that keeps it alive.
> **Note:** this is just a demo file illustrating the connection technique — it is not the actual bot and does not contain its business logic, filters, or Telegram integration.

## Screenshots

<table>
<tr>
<td width="50%"><img src="https://i.ibb.co/mrjJpdC3/2.png" alt="Alert settings"><br><sub>Alert settings — min amount, probability range, live status</sub></td>
<td width="50%"><img src="https://i.ibb.co/5h5Nm0SC/1.png" alt="Whale alert example"><br><sub>A whale alert in action</sub></td>
</tr>
<tr>
<td width="50%"><img src="https://i.ibb.co/zDd7msX/3.png" alt="Market categories"><br><sub>Market section — browse by category</sub></td>
<td width="50%"><img src="https://i.ibb.co/Q3gGFZ8R/4.png" alt="Live sports"><br><sub>Live Sports — a match in progress</sub></td>
</tr>
<tr>
<td width="50%"><img src="https://i.ibb.co/75LWwz0/5.png" alt="Placing a live bet"><br><sub>Placing a bet on a live match</sub></td>
<td width="50%"><img src="https://i.ibb.co/BHP2xR4f/6.png" alt="Crypto Live"><br><sub>Crypto Live — 1-hour round</sub></td>
</tr>
</table>

## Tech Stack

- Node.js, `node-telegram-bot-api` (polling)
- Polymarket Gamma API / Data API / CLOB
- WebSocket live feeds (trades, live sports)
- Express (landing page)

## Disclaimer

This is an independent enthusiast project, not affiliated with Polymarket. Trading on prediction markets carries risk of loss — use at your own risk.
