const economyJs = require('../../../models/economic')

module.exports = {
  name: 'reset',
  alias:["reset"],
  usage:`${prefa}reset @user [all/amount]`,
  desc:"Reset user's economy data.",
  category:"Economy",
  react:"✅",
  start: async (client, m, { yaOwn, prefix, mentionByTag, pushName, args }) => {
    // Check if user is an admin
   
    if (!yaOwn) return m.reply('You do not have permission to reset the user\'s economy data.');

    // Get user ID from mention
    const userId =mentionByTag[0];
    if (!userId) return m.reply('Please mention a user to reset their economy data.');

    let economy = await economyJs.findOne({ userId: userId });

    if (!economy) {
      economy = new economyJs({ userId: userId });
    }

    // Reset all data
    if (args[1] === 'all') {
      economy.wallet = 0;
      economy.bank = 0;
    }
    // Reset specified amount
    else if (!isNaN(args[1])) {
      const amount = parseInt(args[1]);
      economy.wallet -= amount;
    //   economy.bank -= amount;
      if (economy.wallet < 0) economy.wallet = 0;
    //   if (economy.bank < 0) economy.bank = 0;
    }
    // Invalid argument
    else {
      return m.reply(`Invalid argument: ${args[1]}. Usage: ${prefix}reset @user [all/amount]`);
    }

    await economy.save();

    return m.reply(`Successfully reset ${args[1]} coins for user ${pushName}.`);
  }
}
