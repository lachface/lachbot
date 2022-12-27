const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("uptime").setDescription("how long have I been online since my last restart")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    let embed = new EmbedBuilder()

    let totalseconds = (client.uptime / 1000)
    let days = Math.floor(totalseconds / 86400);
    totalseconds %= 86400;
    let hours = Math.floor(totalseconds / 3600);
    totalseconds %= 3600;
    let minutes = Math.floor(totalseconds / 60);
    let seconds = Math.floor(totalseconds % 60);    

    embed.setDescription(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`).setColor("DarkGold");
    await interaction.editReply({
      embeds: [embed]
    });
  }
};