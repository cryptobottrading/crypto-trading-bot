require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Step 1 message
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
        keyboard: [['👉 START']],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    }
  );
});

// When user taps START
bot.on('message', (msg) => {
  if (msg.text === '👉 START') {
    bot.sendMessage(
      msg.chat.id,
      `
🚀 Using *AutoTrader Bot*, you can finally automate your crypto trades...
Unlike stock markets, crypto runs *24/7*. Let automation earn while you sleep.

Are you ready?
    `,
      {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '🔥 OPEN CRYPTOTRADING BOT',
                web_app: { url: process.env.WEB_APP_URL },
              },
            ],
          ],
        },
      }
    );
  }
});
