const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
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
    let embed = new EmbedBuilder()
    if(fs.existsSync(filePath)) {
        const coinbalance = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
        
        embed.setDescription(`${executor} has ${coinbalance} coins`).setColor("DarkGold");
    await interaction.editReply({
      embeds: [embed]
    });

    } else {
      embed.setDescription(`You haven't worked yet. Work by using the "/work" command`).setColor("DarkGold")
        await interaction.editReply({
            embeds: [embed]
        });
    }
  }
};