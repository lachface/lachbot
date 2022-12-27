const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hi").setDescription("lol")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    const Greetings = ["Hi", "Hey", "Hello", "Welcome"]
    const Eastereggs = ["I like your feet"]
    const number = Math.floor(Math.random() * Greetings.length)
    const easteregg = Math.random()
    let embed = new EmbedBuilder()

    embed.setDescription(`${easteregg < 0.02 ? easteregg[Math.floor(Math.random() * Eastereggs.length)] : Greetings[number]} ${interaction.user}`).setColor("DarkGold");
    await interaction.editReply({
      embeds: [embed]
    });
  }
};