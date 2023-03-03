const economyJs = require('../../../models/economic')

module.exports = {
  name: 'withdraw',
  alias:["withdraw"],
  usage:`${prefa}withdraw`,
  desc:"withdraw moeny from bank.",
  category:"Economy",
  react:"✅",
    start:async(client,m,{command,prefix,pushname , pushName,args})=>{
 
    const userId = m.sender;
    let economy = await economyJs.findOne({ userId: userId });

    if (!economy) {
      economy = new economyJs({ userId: userId });
      await economy.save();
    }

    const wallet = economy.wallet;
    const bank = economy.bank;

    if (isNaN(args[0])) return m.reply('❌ Please provide a valid number to withdraw.');
    const amount = parseInt(args[0]);

    if (amount > bank) return m.reply( '❌You don\'t have enough coins in your bank account to withdraw.');
    if (amount <= 0) return m.reply('❌ Please provide a valid amount to withdraw.');

    economy.bank -= amount;
    economy.wallet += amount;

    await economy.save();

    return m.reply(`🏧Successfully withdrew ${amount} coins from your bank account.`);
    }
}