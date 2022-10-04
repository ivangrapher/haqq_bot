const token = "bbbbbbmGpfwZOuAAA8G-Y"
const TelegramApi = require('node-telegram-bot-api')
const bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
  {command: '/start', description: 'Приветствие'},
  {command: '/info', description: 'Информация о пользователе'},
])

const start = () => {
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
  
    if(text === '/start'){
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ed8/09d/ed809db6-5ac1-4736-9f42-b29352cc7591/2.webp')
      return bot.sendMessage(chatId, 'Добро пожаловать на бот Islamic token!')
    }
    if(text === '/info'){
      return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
    }
    return bot.sendMessage(chatId, "Неизвестная команда")
  })
}
start()
