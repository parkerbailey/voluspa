module.exports = {
    name: 'help',
    description: 'Description of commands and their functions.',
    execute(msg, args) {
        message.channel.send(`\`\`\`fix\nACTIVATE GUARDIAN SUPPORT PROTOCOL\nActive commands:\n'help' [this command]: shows this help menu\n\`\`\``);
    },
};