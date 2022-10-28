require("dotenv").config();
const { Client, ActivityType, GatewayIntentBits, Collection} = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of functionFiles) 
    require(`./functions/${folder}/${file}`)(client);
}

let activities = [`on ${client.guilds.cache.size} Servers`, "with the developers console." , "with some code.", "with JavaScript.", "with lachface"];
console.log(`${client.guilds.cache.size}`)
let activitynum = 0

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! on ${client.guilds.cache.size} servers`)

    setInterval(() => {
    
        client.user.setActivity({name: `${activities[activitynum]}`})

        if(activitynum < 4) {
            activitynum++
        } else {
            activitynum = 0
        }

    }, 5000);    
})

client.handleEvents();
client.handleCommands();
client.login(process.env.DISCORD_BOT_TOKEN);

