const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v10");

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith(".js"));

            var { commands, commandArray } = client;
            for (const file of commandFiles) {
                try {
                    const command = require(`../../commands/${folder}/${file}`);
                    commands.set(command.data.name, command);
                    commandArray.push(command.data.toJSON());
                } catch(error) {
                    console.error(error)
                }
            }
        }

        const clientId = process.env.DISCORD_APPLICATION_ID;
        const guildId = process.env.DISCORD_GUILD_ID;
        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
        try {
            console.log('Started refreshing application (/) commands.')

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                 body: commandArray,
            });

            console.log('Successfully reloaded application (/) commands.')
        } catch(error) {
            console.error(error)
        }
    };
};