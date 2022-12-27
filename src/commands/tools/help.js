const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("all the commands I can execute")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })

    let embed = new EmbedBuilder()

    embed.setDescription(`A list of all the commands lachbot can execute:\n 
                      /hi - Greet the bot\n 
                      /ping - returns the API and Client Latency\n 
                      /unsuslink - Sends a unsus link\n 
                      /github - Sends a link for the code of this bot\n
                      /work - Get coins by working\n
                      /balance - Sends the amount of coins you have \n
                      /uptime - returns the bots uptime`).setColor("DarkGold");

    await interaction.editReply({
      embeds: [embed]
    });
  }
};