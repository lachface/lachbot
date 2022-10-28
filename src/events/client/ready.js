const { ThreadAutoArchiveDuration } = require("discord.js");

module.exports = {
    name: 'ready',
    once: ThreadAutoArchiveDuration,
    async execute(client) {
        console.log(`Ready!!! ${client.user.tag} is logged in and online`)
    }
}