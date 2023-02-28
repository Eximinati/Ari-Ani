const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"withdraw",
    alias:["withdrawl"],
    usage:`${prefa}withdraw`,
    desc:"withdraw money from bank account",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args ,economy, pushName} )=>{
      if(!economy.includes(`${m.from}`)) return m.reply('*Use .help to see Economy group link*')
        const amount = parseInt(q);
if (isNaN(amount) || amount == 0) {
  return m.reply(`❌ Please provide a valid amount. Usage: ${prefix}withdraw [amount eg. 100].`);
}

const result = await cs.withdraw({
  user: m.sender,
  guild: 'Ari-Ani',
  amount: amount
});

if (result.error) {
  switch (result.type) {
    case 'money':
      return m.reply("❌ Please specify an amount to withdraw.");
    case 'negative-money':
      return m.reply("❌ You can't withdraw negative money, please use deposit command.");
    case 'low-money':
      return m.reply("❌ You don't have that much money in bank.");
    case 'no-money':
      return m.reply("❌ You don't have any money to withdraw.");
    default:
      return m.reply("❌ Failed to withdraw money from bank, please try again later.");
  }
} else {
  const walletAmount = result.rawData.wallet.toLocaleString();
  const bankAmount = result.rawData.bank.toLocaleString();
  if (result.type === 'all-success') {
    return m.reply(`✅ You have withdrawn all your money from your bank.\nNow you have $${walletAmount} in your wallet and $${bankAmount} in your bank.`);
  } else if (result.type === 'success') {
    return m.reply(`✅ You have withdrawn $${amount} from your bank.\nNow you have $${walletAmount} in your wallet and $${bankAmount} in your bank.`);
  } else {
    return m.reply("❌ Failed to withdraw money from bank, please try again later.");
  }
}

    }
}