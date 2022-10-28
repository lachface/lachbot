const { SlashCommandBuilder, EmbedBuilder, GuildChannel, SlashCommandChannelOption } = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder().setName("hi").setDescription("lol")
        , async execute(interaction, client) {
        const message1 = await interaction.deferReply({
            fetchReply: true
        })

        const newMessage = new EmbedBuilder()
        .setTitle(`hi ${interaction.user}`);
        
        

        await interaction.editReply({
            content: newMessage
        });
    }
};