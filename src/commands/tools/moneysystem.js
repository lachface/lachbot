const { SlashCommandBuilder, Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder().setName("work").setDescription("work and get money")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })
    if(!interaction.user.bot) {
    const userid = interaction.user.id
    const filePath = `./src/coins/${userid}.txt`
    
    if(fs.existsSync(filePath)) {
      try {
        var coins = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
      } catch(error){
        console.error(error)
      }
      
    }

    let number = Math.floor((Math.random() + 1) * 200)
  
    const answers = [`${interaction.user} delivered Pizza and got ${number} coins`
    , `${interaction.user} cleaned the windows of a big company and got ${number} coins`
    , `${interaction.user} sold a piece of gold you found on the ground and got ${number} coins`
    , `${interaction.user} won a bet and got ${number} coins`
    , `${interaction.user} got ${number} coins for Christmas`]
    const randomans = Math.floor(Math.random() * answers.length)
    let finalcoins

    if(fs.existsSync(filePath)) {
      finalcoins = Number(coins) + number
    } else {
      finalcoins = number
    }
    
    try {
      fs.writeFileSync(filePath, finalcoins.toString(), {encoding: 'utf8', flag: 'w'})
    } catch(error) {
      console.error(error)
    }

    const newMessage = `${answers[randomans]}`;

    await interaction.editReply({
      content: newMessage
    
    });
   } else {
    const newMessage = `Bots can't execute commands. If this is an error try again later.`

    await interaction.editReply({
      content: newMessage
    });   
   }
  }
};