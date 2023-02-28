const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"transfer",
    alias:["transfer"],
    usage:`${prefa}transfer`,
    desc:"transfer to user account",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args,economy ,q , pushName , mentionByTag} )=>{
      
      if(!economy.includes(`${m.from}`)) return m.reply('*Use .support to see Economy group link*')
      

        try {
            const amount = parseInt(args[0]);
            if (isNaN(amount) || amount <= 0) {
              return m.reply('❌ Please provide a valid amount to transfer.');
            }
            if (amount > 1000000) {
              return m.reply('❌ Maximum transfer amount is ¥1000000.');
            }
            const mention = await mentionByTag;
            const user = mention?.[0] || m.msg.contextInfo.participant;
            if (m.sender === user) {
              return m.reply("❌ You can't transfer money to yourself.");
            }
            const senderBalance = await cs.balance({
              user: m.sender,
              guild: 'Ari-Ani'
            });
            const senderWallet = parseInt(senderBalance?.wallet) || 0;
            if (amount > senderWallet) {
              return m.reply(`❌ You don't have enough money in your wallet.`);
            }
            const recipientBalance = await cs.addMoney({
              user: user,
              guild: 'Ari-Ani',
              amount: amount,
              wheretoPutMoney: 'wallet'
            });
            const senderResult = await cs.removeMoney({
              user: m.sender,
              guild: 'Ari-Ani',
              amount: amount,
              wheretoPutMoney: 'wallet'
            });
            const recipientName = user?.split('@')[0];
            return client.sendMessage(m.from, {
              text: `🏦 *${pushName}*, successfully transferred *¥${amount}* to @${recipientName}`,
              mentions: [user]
            }, {
              quoted: m
            });
          } catch (err) {
            console.log(err);
            return m.reply("❌ Couldn't find any user ID in context. Try again.");
          }
          
          
    }
}
