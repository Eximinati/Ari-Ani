const economyJs = require('../../../models/economic');

module.exports = {
    name: 'gamble',
    alias: ['gamble'],
    usage: `${prefa}gamble <amount>`,
    desc: 'Gamble a certain amount of coins.',
    category: 'Economy',
    react: '🎯',
    start: async (client, m, { command, prefix, pushname, pushName, args }) => {
        const userId = m.sender;
        const amount = parseInt(args[0]);

        if (!amount || amount <= 0) {
            return m.reply(`Invalid amount. Usage: ${prefix}${command} <amount>`);
        }

        let economy = await economyJs.findOne({ userId });

        if (!economy) {
            economy = new economyJs({ userId });
            await economy.save();
        }

        if (economy.wallet < amount) {
            return m.reply('You do not have enough coins to gamble!');
        }

        // Simulate rolling two dice
        const left = Math.floor(Math.random() * 6) + 1;
        const right = Math.floor(Math.random() * 6) + 1;
        const total = left + right;

        if (total >= 7) {
            // Win condition: roll a total of 7 or higher
            economy.wallet += amount;
            m.reply(`You won ${amount} coins! 🎉🎉🎉\n\nDice Roll: 🎲 ${left} | ${right} 🎲\nTotal: ${total}`);
        } else {
            // Lose condition: roll a total of less than 7
            economy.wallet -= amount;
            m.reply(`You lost ${amount} coins. 😢😢😢\n\nDice Roll: 🎲 ${left} | ${right} 🎲\nTotal: ${total}`);
        }

        await economy.save();
    }
}
