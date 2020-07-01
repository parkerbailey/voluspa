module.exports = {
    name: 'hello',
    description: 'Greetings from Voluspa!',
    execute(msg, args) {
        msg.channel.send('Greetings guardian. I am the warmind Voluspa, engineered by guardians, for guardians.');
    },
};