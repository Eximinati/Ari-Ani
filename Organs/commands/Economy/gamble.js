const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"gamble",
    alias:["gamble"],
    usage:`${prefa}gamble`,
    desc:"Gamble your money :)",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args ,economy, pushName} )=>{
      if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
       const amount = parseInt(q);
if (isNaN(amount) || amount == 0) {
  return m.reply(`❌ Please provide a valid amount. Usage: ${prefix}withdraw [amount eg. 100].`);
}
        let result = await cs.gamble({
            user: m.sender,
            guild: 'Ari-Ani',
            amount: amount,
            minAmount: 10,
            maxAmount: 9000,
            cooldown: 10 //25 seconds
          });
          if (result.error) {
            switch (result.type) {
              case 'amount': return m.reply("Please insert an amount first.");
              case 'nan': return m.reply("The amount was not a number.");
              case 'low-money': return m.reply(`You don't have enough money. You need ${result.neededMoney}$ more to perform the action.`);
              case 'gamble-limit': return m.reply(`You don't have enough money for gambling. The minimum was $${result.minAmount}.`);
              case 'time': return m.reply(`Wooo that is too fast. You need to wait **${result.second}** second(s) before you can gamble again.`);
              default: return m.reply("Something went wrong.");
            }
          } else {
            if (result.type == 'lost') return m.reply(`Ahh, no. You lose $${result.amount}. You've $${result.wallet} left. Good luck next time.`);
            if (result.type == 'won') return m.reply(`Woohoo! You won $${result.amount}! You've $${result.wallet}. Good luck, have fun!`);
          }
          
    }
}