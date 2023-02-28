const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"work",
    alias:["work"],
    usage:`${prefa}work`,
    desc:"work for money :)",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args ,economy, pushName} )=>{
        if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
         let result = await cs.work({
            user: m.sender,
            guild: 'Ari-Ani',
            maxAmount: 100,
            replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic' , 'Cat Buglar' , 'Slave' , 'Prostitute' , 'Assasin' , 'Dick Sucker' , 'Bounty Hunter'],
            cooldown: 25 //25 seconds
          });
          if (result.error) return m.reply(`You have already worked recently Try again in ${result.time}`);
          else m.reply(`You worked as a ${result.workType} and earned $${result.amount}.`)
    }
}