const economyJs = require('../../../models/economic')

module.exports = {
  name: 'work',
  alias:["work"],
  usage:`${prefa}work`,
  desc:"Work to earn coins.",
  category:"Economy",
  react:"✅",
    start:async(client,m,{command,prefix,pushname , pushName,args})=>{

        const minCoins = 100;
    const maxCoins = 1000;
    const earnedCoins = Math.floor(Math.random() * (maxCoins - minCoins + 1)) + minCoins;

    const economy = await economyJs.findOne({ userId: m.sender });
    if (!economy) return message.channel.send('You don\'t have an economy profile.');

    economy.wallet += earnedCoins;
    await economy.save();

    m.reply(`You worked hard and earned ${earnedCoins} coins!`);
  
      
    }
}