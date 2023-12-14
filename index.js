const TelegramApi = require ('node-telegram-bot-api')
const token = "6781112435:AAEiqrxOE-x8PWlOSQ-aRr-poipearMhx_8"
const bot = new TelegramApi(token, {polling: true}) 
    bot.setMyCommands([
        {command: '/start', description: 'начальное приветствие'},
        {command: '/info', description: 'информация  пользовотеля'},
        {command: '/about', description: 'соц сети'}
    ])
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if(text === '/start'){
            await bot.sendSticker(chatId, `https://chpic.su/_data/stickers/m/MrBeanComedy/MrBeanComedy_001.webp`)
            return bot.sendMessage(chatId, `Добро пожаловать`)
        }
        if(text === '/info'){
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ID ${msg.from.id}`)
        }
        if(text === '/about'){
            await bot.sendMessage(chatId, `https://www.instagram.com/v_rusla.n/`)
            await bot.sendMessage(chatId, `https://github.com/Ruslan6877`)
            return bot.sendMessage(chatId, `https://t.me/ruslan_809`)
        }
        await bot.sendSticker(chatId, `https://chpic.su/_data/stickers/m/MrBeanComedy/MrBeanComedy_019.webp`)
       return bot.sendMessage(chatId, 'что ты хочешь я не понимаю')
    })
