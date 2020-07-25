module.exports = {
    name: 'searchusers',
    description: 'Basic guardian search report',
    execute(message, args, bungiekey) {
        message.channel.send(`Searching for user ${args}...`);
        // accessing API
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://www.bungie.net/Platform/User/SearchUsers/?q=${args}`);
        xhr.setRequestHeader("X-API-Key", bungiekey);
        
        
    },
};