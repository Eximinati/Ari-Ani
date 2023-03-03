const economyJs = require('../../../models/economic');
const moment = require('moment-timezone');
const Group = require("../../../models/group")

module.exports = {
  name: 'beg',
  alias: ['beg'],
  usage: `${prefa}beg`,
  desc: 'Beg for some coins and receive a random amount between 1-100 coins every hour!',
  category: 'Economy',
  react: '✅',
  start: async (client, m, { yaOwn, pushName, args }) => {
    
      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
  
      const groupId = m.from;
  
      
        const group = await Group.findOne({ groupId });
        if (!group || !group.enabled) {
          return m.reply(`Economy is not enabled in this group. Type '${prefix}support' to see casino group link`);
        }

    const minCoins = 1;
    const maxCoins = 100;
    const earnedCoins = Math.floor(Math.random() * (maxCoins - minCoins + 1)) + minCoins;
    const userId = m.sender;

    const economy = await economyJs.findOne({ userId });
    if (!economy) return m.reply('❌You don\'t have an economy profile.');

    const lastBegTime = economy.lastBegTime;
    const now = moment().tz('Asia/Kolkata');
    const diffInMinutes = now.diff(lastBegTime, 'minutes');

    if (diffInMinutes < 60) {
      const remainingTime = moment.duration(60 - diffInMinutes, 'minutes').humanize();
      return m.reply(`❌You can only beg once per hour. Please wait ${remainingTime} before begging again.`);
    }

    economy.wallet += earnedCoins;
    economy.lastBegTime = now;
    await economy.save();

    m.reply(`You begged🙏 and received ${earnedCoins} coins!`);
  }
}
