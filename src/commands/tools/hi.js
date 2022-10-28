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
    console.log(easteregg)

    const newMessage = `${easteregg < 0.05 ? easteregg[Math.floor(Math.random() * Eastereggs.length)] : Greetings[number]} ${interaction.user}`;



    await interaction.editReply({
      content: newMessage
    });
  }
};