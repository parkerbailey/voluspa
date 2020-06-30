// require discord.js module and config file
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create new Discord client
const client = new Discord.Client();

// welcome message
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// command handler
client.on('message', message => {
    // slice user input into space-seperated array
    const args = message.content.slice(prefix.length)
    // strips off prefix and removes case sensitivity
    const command = args.shift().toLowerCase();
    // ignore message that don't contain the prefix or are from a bot
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    // conditional statements for commands
    else if (command === 'hello' || 'hi') {
        return message.channel.send('Greetings Guardian.')
    }
});

// token login
client.login(token);