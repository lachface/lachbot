const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("github").setDescription("the link to get to my Code")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    let embed = new EmbedBuilder()
    const link = "https://github.com/lachface/lachbot"

    embed.setDescription(`Link to my Github repository: ${link}`).setColor("DarkGold");
    await interaction.editReply({
      embeds: [embed]
    });
  }
};