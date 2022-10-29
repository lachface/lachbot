const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs")

module.exports = {
  data: new SlashCommandBuilder().setName("balance").setDescription("tells you the coins you have")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    const executor = interaction.user
    const userid = interaction.user.id
    const filePath = `./src/coins/${userid}.txt`
    if(fs.existsSync(filePath)) {
        const coinbalance = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
        
        const newMessage = `${executor} has ${coinbalance} coins`;
    await interaction.editReply({
      content: newMessage
    });

    } else {
        const newMessage = `You haven't worked yet. Work by using the "/work" command`
        await interaction.editReply({
            content:newMessage
        });
    }
  }
};