const economyJs = require('../../models/economic')
module.exports = {
  name: 'deposit',
  alias:["deposit"],
  usage:`${prefa}deposit`,
  desc:"Deposit coins from your wallet into your bank account.",
  category:"Economy",
  cool:30,
  react:"💳",
    start:async(client,m,{yaOwn,prefix,pushname , pushName,args})=>{

      if (!m.from.endsWith("@g.us")) {
        return m.reply("Please use this command in a group.");
      }
    const userId = m.sender;
    let economy = await economyJs.findOne({ userId: userId });

    if (!economy) {
      economy = new economyJs({ userId: userId });
      await economy.save();
    }

    const wallet = economy.wallet;
    const bank = economy.bank;

    const amount = parseInt(args[0]);

    economy.wallet = wallet - amount;
    economy.bank = bank + amount;
    await economy.save();

    


    // const buttons = [
    //   {buttonId: `${prefix}bank`, buttonText: {displayText: 'Bank'}, type: 1},
    //   {buttonId: `${prefix}gamble`, buttonText: {displayText: 'Gamble'}, type: 1},
    //   {buttonId: `${prefix}wallet`, buttonText: {displayText: 'Wallet'}, type: 1}
    // ]
    
    let buttonText = ''
    if (isNaN(args[0])){
      buttonText =  'Please provide a valid number to deposit.';
    }else if (amount > wallet){
      buttonText = 'You don\'t have enough coins in your wallet to deposit.'
    }else if (amount <= 0){
       buttonText = 'Please provide a valid number to deposit.'
      }else{
        buttonText = `${pushName} have deposited ${amount} coins to your bank account.`
      };

      var url = "https://www.bbva.com/wp-content/uploads/en/2017/08/banking-innovation-technology-internet-payment-gateway-nimble-entrepreneurship-bbva.jpg"
    // const buttonMessage = {
    //     image: {url: ''},
    //     caption: buttonText,
    //     footer: 'Ari-Ani',
    //     buttons: buttons,
    //     headerType: 4
    // }
    
     await client.sendMessage(m.from, {image: {url: url} , caption: buttonText})
  }
};
