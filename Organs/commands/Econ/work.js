const economyJs = require('../../../models/economic')
const Group = require("../../../models/group")
const moment = require('moment-timezone')

module.exports = {
  name: 'work',
  alias:["work"],
  usage:`${prefa}work`,
  desc:"Work to earn coins.",
  category:"Economy",
  react:"✅",
  start:async(client,m,{command,prefix,pushname,pushName,args})=>{
    if (!m.from.endsWith("@g.us")) {
      return m.reply("Please use this command in a group.");
    }

    const groupId = m.from;

    const group = await Group.findOne({ groupId });
    if (!group || !group.enabled) {
      return m.reply("Economy is not enabled in this group. Type '.support' to see casino group link ");
    }

    const cooldownHours = 8;
    const lastWork = moment.tz(economy.lastWork, 'Asia/Kolkata'); // Replace 'Asia/Kolkata' with your desired timezone
    const currentTime = moment.tz('Asia/Kolkata'); // Replace 'Asia/Kolkata' with your desired timezone

    if (lastWork && lastWork.add(cooldownHours, 'hours').isAfter(currentTime)) {
      const remainingCooldown = lastWork.add(cooldownHours, 'hours').diff(currentTime, 'minutes');
      return m.reply(`You can't work again yet. Please wait ${remainingCooldown} minutes.`);
    }

    const minCoins = 100;
    const maxCoins = 1000;
    const earnedCoins = Math.floor(Math.random() * (maxCoins - minCoins + 1)) + minCoins;

    const economy = await economyJs.findOne({ userId: m.sender });
    if (!economy) return message.channel.send('You don\'t have an economy profile.');

    economy.wallet += earnedCoins;
    economy.lastWork = currentTime.toDate();
    await economy.save();

    m.reply(`You worked hard and earned ${earnedCoins} coins!`);
  }
}
