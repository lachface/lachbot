const { SlashCommandBuilder, EmbedBuilder, Formatters } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("unsuslink").setDescription("A link which isnt sus")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    embed = new EmbedBuilder()
    await interaction.editReply({
      content: "http://tinyurl.com/fullyunsus"
    });
  }
};