const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("github").setDescription("the link to get to my Code")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    const link = "https://github.com/lachface/lachbot"

    const newMessage = `Link to my Code on Github: ${link}`;
    await interaction.editReply({
      content: newMessage
    });
  }
};