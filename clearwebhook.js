const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('7628014015:AAHcHeXWMfF1TV6BQBz3GiKlpQ9byth6qE8');

bot.deleteWebHook().then(() => {
  console.log('✅ Webhook deleted');
}).catch(err => {
  console.error('❌ Error deleting webhook:', err.message);
});
