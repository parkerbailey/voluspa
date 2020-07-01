// require discord.js, command files, and config file
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create new Discord client
const client = new Discord.Client();

// create new collection
client.commands = new Discord.Collection();

// import command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// welcome message
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// command handler
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`\`\`\`css\n[ERROR: command handler failed to recognize input]\`\`\``);
    }
});

// token login
client.login(token);