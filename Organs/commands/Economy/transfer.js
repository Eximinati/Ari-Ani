const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"transfer",
    alias:["transfer"],
    usage:`${prefa}transfer`,
    desc:"transfer to user account",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args ,q , pushName , mentionByTag} )=>{
      
       /* try{
       
        const anu = args.join(' ').split(' ')
        if (!anu) return m.reply(`❌ No amount provided!`)
        if (isNaN(anu[0]) == true) return m.reply(`❌ No amount provided!`)
        if (!anu[0]) return m.reply(`❌ No amount provided!`)
         if (anu[0].includes("-")) return m.Sreply("You can't send negitive money.")
         const mention= await mentionByTag
        const users =await (mention[0]) || m.msg.contextInfo.participant
        if ( m.sender == users) return m.reply("❌ You can't transfer money to yourself")
             
          let money = parseInt(anu[0]);
          const wheretoPutMoney = 'wallet'; // Or bank
              let result1 = await cs.balance({
            user: m.sender,
            guild: 'Ari-Ani'
          });
          if ( money > parseInt(result1.wallet) || !parseInt(result1.wallet) == money) return m.reply(`You don't have enough money in your wallet.`);
          let result2 = await cs.removeMoney({
            user: m.sender,
            guild: 'Ari-Ani',
            amount: money,
            wheretoPutMoney: wheretoPutMoney
          });
          let result3 = await cs.addMoney({
            user: users,
            guild: 'Ari-Ani',
            amount: money,
            wheretoPutMoney: wheretoPutMoney
          });
         return client.sendMessage(m.from,{text:`🏦 *${pushName}*, Successfully transfered *¥${money}* to @${users.split('@')[0]}`,mentions:[users]},{quoted:m})
        } catch (err) {
            console.log(err)
            return m.reply("❌ Couldn't find any userID in context, Try Again.")
        
        }*/

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
