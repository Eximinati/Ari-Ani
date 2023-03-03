const economyJs = require('../../../models/economic');

module.exports = {
    name: 'rollDice',
    alias: ['roll-dice', 'rd'],
    usage: `${prefa}gamble <number>`,
    desc: 'Gamble a certain amount of coins on a dice roll.',
    category: 'Economy',
    react: '🎲',
    start: async (client, m, { command, prefix, pushname, pushName, args }) => {
        const userId = m.sender;
        const guess = parseInt(args[0]);

        if (!guess || guess < 1 || guess > 6) {
            return m.reply(`Invalid guess. Usage: ${prefix}${command} <number> (1-6)`);
        }

        const amount = 50;
        let economy = await economyJs.findOne({ userId });

        if (!economy) {
            economy = new economyJs({ userId });
            await economy.save();
        }

        if (economy.wallet < amount) {
            return m.reply('You do not have enough coins to gamble!');
        }

        // Roll the dice
        const roll = Math.floor(Math.random() * 6) + 1;

        if (roll === guess) {
            // Win condition: guess correctly
            economy.wallet += 1000;
            m.reply(`You won 1000 coins! 🎉🎉🎉\n\nDice Roll: ${roll} 🎲`);
        } else {
            // Lose condition: guess incorrectly
            economy.wallet -= amount;
            m.reply(`You lost ${amount} coins. 😢😢😢\n\nDice Roll: ${roll} 🎲`);
        }

        await economy.save();
    }
}
