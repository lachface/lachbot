require("dotenv").config();
const { Client, GatewayIntentBits, Collection, GuildVoiceStates} = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: GatewayIntentBits.Guilds, GuildVoiceStates });
client.commands = new Collection();
client.commandArray = [];
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of functionFiles) 
    require(`./functions/${folder}/${file}`)(client);
}
let activitynum = 0

let activities = [
    "with lachface"
    , "with the developers console."
    , "with some code."
    , "with JavaScript."
    , `on X Servers`];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! on ${client.guilds.cache.size} servers`)

  })
    setInterval(() => {
    
        try {
            client.user.setActivity({name: activities[activitynum].replace("X", client.guilds.cache.size)})
        } catch(e) {
            console.error(e)
        }
    
        if(activitynum < 4) {
            activitynum++
        } else {
            activitynum = 0
        }

    }, 5000);    


client.handleEvents();
client.handleCommands();
client.login(process.env.DISCORD_BOT_TOKEN);

