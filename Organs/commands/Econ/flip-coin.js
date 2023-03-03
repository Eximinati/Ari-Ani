const economyJs = require('../../../models/economic');

module.exports = {
    name: 'flipCoin',
    alias: ['flip-coin', 'fc'],
    usage: `${prefa}gamble <amount> <heads or tails>`,
    desc: 'Gamble a certain amount of coins on a coin flip.',
    category: 'Economy',
    react: '🌞',
    start: async (client, m, { command, prefix, pushname, pushName, args }) => {
        const userId = m.sender;
        const amount = parseInt(args[0]);
        const bet = args[1];

        if (!amount || amount <= 0) {
            return m.reply(`Invalid amount. Usage: ${prefix}${command} <amount> <heads or tails>`);
        }

        if (!bet || !['heads', 'tails'].includes(bet.toLowerCase())) {
            return m.reply(`Invalid bet. Usage: ${prefix}${command} <amount> <heads or tails>`);
        }

        let economy = await economyJs.findOne({ userId });

        if (!economy) {
            economy = new economyJs({ userId });
            await economy.save();
        }

        if (economy.wallet < amount) {
            return m.reply('You do not have enough coins to gamble!');
        }

        // Flip a coin
        const directions = ["heads", "tails"];
        const result = directions[Math.floor(Math.random() * directions.length)];
        //const result = Math.random() < 0.5 ? 'heads' : 'tails';

        if (result === bet.toLowerCase()) {
            // Win condition: guess correctly
            economy.wallet += amount;
            m.reply(`You won ${amount} coins! 🎉🎉🎉\n\nCoin Flip: ${result.toUpperCase()} 🪙`);
        } else {
            // Lose condition: guess incorrectly
            economy.wallet -= amount;
            m.reply(`You lost ${amount} coins. 😢😢😢\n\nCoin Flip: ${result.toUpperCase()} 🪙`);
        }

        await economy.save();
    }
}
