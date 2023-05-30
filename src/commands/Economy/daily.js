const economyJs = require('../../models/economic')
const moment = require('moment-timezone');

module.exports = {
  name: 'daily',
  alias: ['Daily'],
  usage: `${prefa}daily`,
  desc: 'Claim your daily coins.',
  category: 'Economy',
  react: '💰',
  start: async (client, m, { command, yaOwn, prefix, pushname, pushName, args }) => {
    if (!m.from.endsWith("@g.us")) {
      return m.reply("Please use this command in a group.");
    }
  const userId = m.sender;
  let economy = await economyJs.findOne({ userId });

  if (!economy) {
    economy = new economyJs({ userId });
    await economy.save();
  }

  const lastDaily = economy.lastDaily;
  const now = moment.tz('Asia/Tehran');
  economy.wallet += 500;
  economy.lastDaily = now;
  await economy.save();

  let buttonText = '';
    if (lastDaily) {
      const timeDiff = moment.duration(now.diff(lastDaily)).asHours();
      if (timeDiff < 24) {
        const timeRemaining = moment.duration(24 - timeDiff, 'hours').humanize();
        buttonText =  `${pushName} have already claimed his daily reward. You can claim again in ${timeRemaining}.`;
      }
    }

    if (!buttonText) {
      economy.wallet += 500;
      economy.lastDaily = now;
      await economy.save();
      buttonText = `You claimed your daily 500 coins! | ${pushName}`;
    }
  await client.sendMessage(m.from, {text: buttonText}, { quoted: m });
}
  }
