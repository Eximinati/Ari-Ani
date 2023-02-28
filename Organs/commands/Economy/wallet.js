const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports={
    name:"wallet",
    alias:["wal"],
    usage:`${prefa}wallet`,
    desc:"See your wallet...",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,pushname,economy , pushName,args})=>{
      if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
        
const tag = m.sender.substring(3, 7)
const result = await cs.balance({
  user: m.sender,
  guild: 'Ari-Ani'
});

const walletAmount = result.wallet.toLocaleString();
const replyMessage = `¸„.-•~¹°”ˆ˜¨   🎀  𝒲𝒜𝐿𝐿𝐸𝒯  🎀   ¨˜ˆ”°¹~•-.„¸ \n\n🅸🅽🅵🅾: \n\n *ଘName*: ${pushName} \n*⛩ Tag :* #${tag}\n*💴Wallet*: ${walletAmount}\n`;

let button = [
  { buttonId: `${prefix}bank`, buttonText: { displayText: 'Bank' }, type: 1 },
];
let buttonMessage = {
  text: replyMessage,
  footer: "Ari-Ani",
  buttons: button,
  headerType: 1
};
await client.sendMessage(m.from, buttonMessage, { quoted: m });


}
}