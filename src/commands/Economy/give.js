const economyJs = require('../../models/economic')
module.exports = {
  name: 'give',
  alias:["give"],
  usage: `${prefa}give <amount> <@user>`,
  desc: 'Give a certain amount of coins to another user.',
  category:"Economy",
  cool:10,
  react:"💸",
    start:async(client,m,{args,prefix , pushName,mentionByTag})=>{

      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }

    const amount = parseInt(args[0]);
    const recipient =await mentionByTag[0];
    
    if (!amount || isNaN(amount) || amount <= 0) {
      return m.reply('please enter a valid amount to give.');
    }
    if (!recipient) {
      return m.reply('please mention a valid user to give money to.');
    }
    if (recipient === m.sender) {
      return m.reply('you cannot give money to yourself.');
    }

    const senderEconomy = await economyJs.findOne({ userId: m.sender });
    const recipientEconomy = await economyJs.findOne({ userId: recipient });

    const wallet = senderEconomy.wallet.toLocaleString();;
    console.log(wallet)
    if (!senderEconomy) {
      return m.reply('you do not have an economy profile.');
    }
    if (!recipientEconomy) {
      return m.reply(`${recipient} does not have an economy profile.`);
    }
    if (wallet < amount) {
      return m.reply(`you do not have enough money to give ${amount} coins.`);
    }

    senderEconomy.wallet -= amount;
    recipientEconomy.wallet += amount;

    try {
      await senderEconomy.save();
      await recipientEconomy.save();
      m.reply(`successfully gave ${amount} coins to @${recipient.split('@')[0]}.`);
    } catch (err) {
      console.error(err);
      m.reply('an error occurred while giving money.');
    }
  }
}
