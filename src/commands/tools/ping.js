const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
//const { execute } = require("../../events/client/ready");

module.exports = {
    data : new SlashCommandBuilder().setName("ping").setDescription("Return my Ping!"), async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        let embed = new EmbedBuilder()

        embed.setDescription(`API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`)
        await interaction.editReply({
            embeds: [embed]
        });
    }
};