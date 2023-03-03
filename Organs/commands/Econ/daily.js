const economyJs = require('../../../models/economic')
const moment = require('moment-timezone');
const Group = require("../../../models/group")

module.exports = {
  name: 'daily',
  alias: ['daily'],
  usage: `${prefa}daily`,
  desc: 'Claim your daily coins.',
  category: 'Economy',
  react: '💰',
  start: async (client, m, { command, yaOwn, prefix, pushname, pushName, args }) => {



    
      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
  
      const groupId = m.from;
  
      
        const group = await Group.findOne({ groupId });
        if (!group || !group.enabled) {
          return m.reply(`Economy is not enabled in this group. Type '${prefix}support' to see casino group link`);
        }


  const userId = m.sender;
  let economy = await economyJs.findOne({ userId });

  if (!economy) {
    economy = new economyJs({ userId });
    await economy.save();
  }

  const lastDaily = economy.lastDaily;
  const now = moment.tz('Asia/Tehran');
  economy.wallet += 100;
  economy.lastDaily = now;
  await economy.save();


  let button = [
    {
      buttonId: `${prefix}beg`,
      buttonText: {displayText: 'beg'},
      type: 1,
    }
  ];
  
  let buttonText = '';
  if (lastDaily) {
    const timeDiff = moment.duration(now.diff(lastDaily)).asHours();
    if (timeDiff < 24) {
      const timeRemaining = moment.duration(24 - timeDiff, 'hours').humanize();
      buttonText =  `You already claimed your daily coins. You can claim again in ${timeRemaining}.`;
    }
  }else{
    buttonText = `You claimed your daily 100 coins!`
  }
  
  let buttonMessage = {
    text: buttonText,
    footer: "Ari-Ani",
    buttons: button,
    headerType: 1,
  };
  
  await client.sendMessage(m.from, buttonMessage, { quoted: m });
}
  }
