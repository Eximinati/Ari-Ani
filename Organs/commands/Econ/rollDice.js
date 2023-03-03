const economyJs = require('../../../models/economic');
const Group = require("../../../models/group")

module.exports = {
    name: 'rollDice',
    alias: ['rd'],
    usage: `${prefa}gamble <number>`,
    desc: 'Gamble a certain amount of coins on a dice roll.',
    category: 'Economy',
    cool:10,
    react: '🎲',
    start: async (client, m, { command, prefix, pushname, pushName, args }) => {


        if (!m.from.endsWith("@g.us")) {
            return m.reply("Please use this command in a group.");
          }
      
          const groupId = m.from;
      
          
            const group = await Group.findOne({ groupId });
            if (!group || !group.enabled) {
              return m.reply(`Economy is not enabled in this group. Type '${prefix}support' to see casino group link`);
            }

            
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
