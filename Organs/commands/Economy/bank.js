const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"bank",
    alias:["bank"],
    usage:`${prefa}bank`,
    desc:"See your bank account",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text , economy, pushName,args})=>{
        if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to get Casino group link*')
       
        let tag = m.sender.substring(3, 7)
    const result = await cs.balance({
        user: m.sender,
        guild: 'Ari-Ani'
    });
    const bankAmount = result.bank.toLocaleString();
    // const replyMessage = `¸„.-•~¹°”ˆ˜¨   🎀  𝐛𝐚𝐧𝐤  🎀   ¨˜ˆ”°¹~•-.„¸ \n\n🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*🏛️Bank*: ${bankAmount}`;
    // return m.reply(replyMessage);
    const buttons = [
        {buttonId: `${prefix}wallet`, buttonText: {displayText: 'wallet'}, type: 1},
        {buttonId: `${prefix}help`, buttonText: {displayText: 'help'}, type: 1}
    ]
    let textBtn = {
        text:`¸„.-•~¹°”ˆ˜¨   🎀  𝐛𝐚𝐧𝐤  🎀   ¨˜ˆ”°¹~•-.„¸ \n\n🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n*🏛️Bank*: ${bankAmount}\n`,
        footer: "Ari-Ani",
        buttons: buttons,
        headerType: 1
    }
    await client.sendMessage(m.from,textBtn,{quoted:m})
}
}