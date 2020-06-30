// Import Discord module
const Discord = require('discord.js');

// Initialize client object
const client = new Discord.Client();

// Bot startup message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Bot message read
client.on('message', msg => {
    if (msg.content === '>Hello') {
        msg.reply('Greetings Guardian.')
    }
});

// token login
client.login('NzI3NTI3NzI4NDk1OTg0Njkw.Xvt4lQ.QUIwQRhZYuXTrgqYgkZ1JrF8BLY');