const { SlashCommandBuilder, EmbedBuilder, Formatters } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("unsuslink").setDescription("A link which isnt sus")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    embed = new EmbedBuilder()
    await interaction.editReply({
      embeds: [embed.setDescription("<https://www.youtube.com/watch?v=QB7ACr7pUuE>").setColor("DarkGold")]
    });
  }
};