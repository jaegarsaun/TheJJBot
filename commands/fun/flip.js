const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flip')
        .setDescription('Flips a coin'),
    async execute(interaction) {
        // Pick a number between 1 and 2
        let num = Math.floor(Math.random() * 2) + 1;
        // If the number is 1, it's heads. If it's 2, it's tails.
        let result = num === 1 ? 'Heads' : 'Tails';
        await interaction.reply(`:coin: You flipped ${result}`);
    },
};