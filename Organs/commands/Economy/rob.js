const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
module.exports={
    name:"rob",
    alias:["rob"],
    usage:`${prefa}rob`,
    desc:"rob the money :)",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,participants ,economy, pushName, mentionByTag} )=>{
      if(!economy.includes(`${m.from}`)) return m.reply('*Use .help to see Economy group link*')
        // let user = args[0].user
        // if (user.bot || user === client.user) return message.reply("This user is a bot.");
        // if (!user) return message.reply('Sorry, you forgot to mention somebody.');

        const mention = await mentionByTag;
            const users = mention?.[0]
            //|| m.msg.contextInfo.participants;
            if (m.sender === users) {
              return m.reply("You can't transfer money to yourself.");
            }
            if(!users){
              m.reply('Please tag the user you wanna rob')
            }
            const userremove = users.split('@')[0]

        let result = await cs.rob({
          user: m.sender,
          user2: users,
          guild: 'Ari-Ani',
          minAmount: 100,
          successPercentage: 5,
          cooldown: 5, //25 seconds,
        //   maxRob: 1000
        });
        if (result.error) {
          if (result.type === 'time') return m.reply(`You have already robbed recently Try again in ${result.time}`);
          if (result.type === 'low-money') return m.reply(`You need atleast $${result.minAmount} to rob somebody.`);
          if (result.type === 'low-wallet') return m.reply(`@${userremove} have less than $${result.minAmount} to rob.`)
          if (result.type === 'caught') return m.reply(`${'userID'.username} you robbed ${result.user2.username} and got caught and you payed ${result.amount} to ${result.user2.username}!`)
        } else {
            if (result.type === 'success') return m.reply(`${pushName} you robbed ${result.user2} and got away with ${result.amount}!`)
        }
    }
}