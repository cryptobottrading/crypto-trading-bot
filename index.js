require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

// Setup dummy Express server to keep the service alive on Render
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('🤖 CryptoTradingBot is running.'));
app.listen(PORT, () => console.log(`🌐 Web server running on port ${PORT}`));

// Create Telegram bot with polling
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Step 1: When user types /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    `
🤖 *What can this bot do?*
- 📊 Automate crypto trading
- ⏰ Monitor markets 24/7
- 💸 Earn while you sleep

✅ No experience needed!
    `,
    {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '👉 START',
              callback_data: 'start_bot',
            },
          ],
        ],
      },
    }
  );
});

// Step 2: When user taps "👉 START"
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '👉 START') {
    bot.sendMessage(
      chatId,
      `
🚀 How does $1000 per day with Automated Trading Robots sound?.

Unlike the stock market, crypto runs *24/7*. Let automation help you earn while you sleep.

*Are you ready?*
      `,
      {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '🔥 OPEN CRYPTOTRADING BOT',
                web_app: { url: process.env.WEB_APP_URL }, // Your Mini App URL
              },
            ],
          ],
        },
      }
    );
  }
});
