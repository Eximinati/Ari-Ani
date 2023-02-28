const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"daily",
    alias:["daily"],
    usage:`${prefa}daily`,
    desc:"Claim daily reward...",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,economy,text,pushName})=>{

      if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
         
      const tag = m.sender.substring(3, 7)
        const result = await cs.daily({
            user: m.sender,
            guild: 'Ari-Ani',
            amount: 100,
          });
          const waitTime = result.time;
          
        //   if (result.error) {
            
        //     return m.reply(`Sorry, you can use the daily command again in ${waitTime}.`);
        //   }
        //     const earnedAmount = result.amount;
          
        //   let button = [
        //     {buttonId: `${prefix}wallet`, buttonText: {displayText: 'wallet'}, type: 1},
        //   ]
        //   let buttonMessage =  {
        //     text:`🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n*Daily*: ${earnedAmount}\n ⌛Time left: ${waitTime}\n`,
        //     footer: "Ari-Ani",
        //     buttons: button,
        //     headerType: 1
        // }
        // await client.sendMessage(m.from,buttonMessage,{quoted:m})
        const earnedAmount = result.amount;

        let button = [
          {
            buttonId: `${prefix}wallet`,
            buttonText: {displayText: 'wallet'},
            type: 1,
          }
        ];
        
        let buttonText = '';
        if (result.error) {
          buttonText = `🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag} \n⌛Time left: ${waitTime}\n`;
        } else {
          buttonText = `🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n*✿Daily*: ${earnedAmount}\n`;
        }
        
        let buttonMessage = {
          text: buttonText,
          footer: "Ari-Ani",
          buttons: button,
          headerType: 1,
        };
        
        await client.sendMessage(m.from, buttonMessage, { quoted: m });
        
          
    }
}