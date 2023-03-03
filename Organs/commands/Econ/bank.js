const economyJs = require('../../../models/economic')
const Group = require("../../../models/group")
module.exports = {
  name: 'bank',
  alias:["bank"],
  usage:`${prefa}wallet`,
  desc:"View your Bank balance.",
  category:"Economy",
  cool:3,
  react:"💸",
    start:async(client,m,{yaOwn,prefix , pushName,tagId})=>{

      
      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
  
      const groupId = m.from;
      const group = await Group.findOne({ groupId });
      if (!group || !group.enabled) {
        return m.reply(`Economy is not enabled in this group. Type '${prefix}support' to see casino group link`);
      }
        
    const userId = m.sender;
    let economy = await economyJs.findOne({ userId: userId });
    
    if (!economy) {
      economy = new economyJs({ userId: userId });
      await economy.save();
    }

    const wallet = economy.wallet.toLocaleString();
    const bank = economy.bank.toLocaleString();

    let walText = `\n*❁財⍩𝔹𝕒𝕟𝕜 - 💴*\n\nName: ${pushName}\n\nBank: ${bank}`
    let button = [
        { buttonId: `${prefix}wallet`, buttonText: { displayText: 'Wallet' }, type: 1 },
      ];

      let buttonMessage = {
          text: walText,
          footer: "Ari-Ani",
          buttons: button,
          headerType: 1
        };

        await client.sendMessage(m.from , buttonMessage , {quoted:m})
  }
};