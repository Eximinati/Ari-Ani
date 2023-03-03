const economyJs = require('../../../models/economic');
const Group = require("../../../models/group")

module.exports = {
  name: 'slot',
  alias: ['slot'],
  usage: `${prefa}slot <amount>`,
  desc: 'Play the slot machine!',
  category: 'Economy',
  react: '🎰',
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
    const amount = parseInt(`${q}`);

    if (!amount || amount <= 0) {
      return m.reply(`Invalid amount. Usage: ${prefix}${command} <amount>`);
    }

    let economy = await economyJs.findOne({ userId });

    if (!economy) {
      economy = new economyJs({ userId });
      await economy.save();
    }

    if (economy.wallet < amount) {
      return m.reply('You do not have enough coins to play!');
    }

    const symbols = ['\uD83C\uDF47', '\uD83C\uDF52', '\uD83C\uDF4A', '\uD83C\uDF4B', '\uD83C\uDF49', '\uD83C\uDF4E'];
    const slots = [
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
      Math.floor(Math.random() * symbols.length),
    ];
    const isWin = slots[0] === slots[1] && slots[1] === slots[2];

    if (isWin) {
      economy.wallet += amount * 3;
      m.reply(`You won ${amount * 3} coins! The slots were: ${symbols[slots[0]]} ${symbols[slots[1]]} ${symbols[slots[2]]}`);
    } else {
      economy.wallet -= amount;
      m.reply(`You lost ${amount} coins! The slots were: ${symbols[slots[0]]} ${symbols[slots[1]]} ${symbols[slots[2]]}`);
    }

    await economy.save();
  },
};
