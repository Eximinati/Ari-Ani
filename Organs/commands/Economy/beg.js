const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"beg",
    alias:["beg"],
    usage:`${prefa}beg`,
    desc:"Why working for money when you can beg for it :)",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args , pushName, mentionByTag} )=>{
        try {
            const result = await cs.beg({
              user: m.sender,
              guild: 'Ari-Ani',
              minAmount: 100,
              maxAmount: 400,
            });
          
            if (result.error) {
              return m.reply(`You have begged recently. Try again in ${result.time}.`);
            }
          
            const buttons = [
              { buttonId: `${prefix}work`, buttonText: { displayText: 'Work' }, type: 1 },
              { buttonId: `${prefix}wallet`, buttonText: { displayText: 'Wallet' }, type: 1 },
            ];
          
            const textBtn = {
              text: `*Beggar: ${pushName} has begged and earned $${result.amount}.*`,
              footer: 'Ari-Ani',
              buttons: buttons,
              headerType: 1,
            };
          
            await client.sendMessage(m.from, textBtn, { quoted: m });
          } catch (error) {
            console.error(error.stack);
          }
          
          
    }
}