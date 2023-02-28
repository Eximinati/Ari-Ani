const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"deposit",
    alias:["deposit"],
    usage:`${prefa}deposit`,
    desc:"deposit to bank account",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args ,economy, pushName} )=>{

      if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
        
      const tag = m.sender.substring(3, 7)
    const amount = parseInt(q);
if (isNaN(amount) || amount == 0) {
  return m.reply(`❌ Please provide a valid amount. Usage: ${prefix}deposit [amount eg. 100].`);
}

const result = await cs.deposite({
  user: m.sender,
  guild: 'Ari-Ani',
  amount: amount
});

if (result.error) {
  switch (result.type) {
    case 'money':
      m.reply("Please specify an amount to deposit.");
      break;
    case 'negative-money':
      m.reply("You can't deposit negative money.");
      break;
    case 'low-money':
      m.reply("You don't have enough money in your wallet.");
      break;
    case 'no-money':
      m.reply("You don't have any money to deposit.");
      break;
    case 'bank-full':
      m.reply("Your bank is full. It has reached its limit.");
      break;
    default:
      m.reply("An error occurred while processing your deposit request.");
  }
} else {
  
  if (result.type === 'all-success') {
    let button = [
      { buttonId: `${prefix}wallet`, buttonText: { displayText: 'Wallet' }, type: 1 },
    ];
    let buttonMessage = {
      text: `★彡[ᴅᴇᴘᴏꜱɪᴛ]彡★: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n⍟*Amount Deposited:*: ${result.amount}\n *⑆Bank: ${result.rawData.bank}*\n`,
      footer: "Ari-Ani",
      buttons: button,
      headerType: 1
    };
    await client.sendMessage(m.from, buttonMessage, { quoted: m });
  } else {
    let button = [
      { buttonId: `${prefix}wallet`, buttonText: { displayText: 'Wallet' }, type: 1 },
    ];
    let buttonMessage = {
      text: `꧁𓊈𒆜🅳🅴🅿🅾🆂🅸🆃𒆜𓊉꧂: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n⍟*Amount Deposited:*: ${result.amount}\n *⑆Bank: ${result.rawData.bank}*\n`,
      footer: "Ari-Ani",
      buttons: button,
      headerType: 1
    };
    await client.sendMessage(m.from, buttonMessage, { quoted: m });
  }

  
}

    }
}