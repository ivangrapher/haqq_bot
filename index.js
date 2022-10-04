const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()
const bot = new TelegramApi(process.env.BOT_TOKEN, {polling: true})

bot.setMyCommands([
  {command: '/start', description: 'Приветствие'},
  {command: '/info', description: 'Информация о пользователе'},
  {command: '/add ', description: 'Добавить свой валопер'},
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
      
      return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.id}`);
    }
    if(/^\/add\s/.test(text)){
           
      return bot.sendMessage(chatId, `ADD ${msg.from.first_name} ${msg.from.id}`);
    }
    console.log(msg)
    let tmp = msg.text.replace(/  +/g, ' ');
    tmp = tmp.split(' ');
    console.log(tmp[1])
    return bot.sendMessage(chatId, `Неизвестная команда`)
  })
}
start()
