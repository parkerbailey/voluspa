module.exports = {
    name: 'hello',
    description: 'Greetings from Voluspa!',
    execute(message, args, bungiekey) {
        message.channel.send('Greetings guardian. I am the warmind Voluspa, engineered by guardians, for guardians.\nRun \`>help\` to see all available commands.');
    },
};