const economyJs = require('../../../models/economic')
module.exports = {
  name: 'bank1',
  alias:["bank1"],
  usage:`${prefa}wallet`,
  desc:"View your Bank balance.",
  category:"Economy",
  react:"💸",
    start:async(client,m,{command,prefix , pushName,tagId})=>{
 
    const userId = m.sender;
    let economy = await economyJs.findOne({ userId: userId });

    // const tag = economy.tag Tag: ${tag}
    if (!economy) {
      economy = new economyJs({ userId: userId });
      await economy.save();
    }

    const wallet = economy.wallet.toLocaleString();
    const bank = economy.bank.toLocaleString();

    let walText = `\n*❁財⍩𝔹𝕒𝕟𝕜 - 💴*\n\nName: ${pushName}\n\nBank: ${bank}`
    //m.reply(`Your balance is: User:${userId}\nWallet: ${wallet} coins\nBank: ${bank} coins ++++++++++++ ${economy.tag}`);

    
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