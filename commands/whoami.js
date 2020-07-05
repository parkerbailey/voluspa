module.exports = {
    name: 'whoami',
    description: 'Basic guardian identity report',
    execute(message, args, bungiekey) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest")
    },
};