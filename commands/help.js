module.exports = {
    name: 'help',
    description: 'Description of commands and their functions.',
    execute(message, args, bungiekey) {
        message.channel.send(`\`\`\`fix\n
        INITIALIZING GUARDIAN SUPPORT PROTOCOL\n
        Active commands:\n
        >help:      shows this help menu\n
        >hello:     receieve a greeting from Voluspa\n
        \`\`\``);
    },
};