const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("lol")
  , async execute(interaction, client) {
    const message1 = await interaction.deferReply({
      fetchReply: true
    })
    
    const client1 = new Client({ intents: GatewayIntentBits.Guilds })

    interaction.guild.roles.create({
        data: {
            name: 'Mute',
            color: 'BLUE',
        },
        reason: `mutes people`
    }).then(console.log).catch(console.error);


    console.log(interaction.guild)

    const newMessage = `${interaction.user}`;
    await interaction.editReply({
      content: newMessage
    });
  }
};