const economyJs = require('../../../models/economic')
const moment = require('moment-timezone');
module.exports = {
  name: 'daily',
  alias: ['daily'],
  usage: `${prefa}daily`,
  desc: 'Claim your daily coins.',
  category: 'Economy',
  react: '💰',
  start: async (client, m, { command, prefix, pushname, pushName, args }) => {
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
