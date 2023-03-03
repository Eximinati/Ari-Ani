const economyJs = require('../../../models/economic')
const Group = require("../../../models/group")

module.exports = {
  name: 'withdraw',
  alias:["withdraw"],
  usage:`${prefa}withdraw`,
  desc:"withdraw moeny from bank.",
  category:"Economy",
  react:"✅",
    start:async(client,m,{command,prefix,pushname , pushName,args})=>{

      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
  
      const groupId = m.from;
  
      
        const group = await Group.findOne({ groupId });
        if (!group || !group.enabled) {
          return m.reply("Economy is not enabled in this group. Type '.support' to see casino group link ");
        }

 
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