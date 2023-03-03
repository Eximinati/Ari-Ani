const economyJs = require('../../../models/economic')

module.exports = {
  name: 'deposit',
  alias:["deposit"],
  usage:`${prefa}deposit`,
  desc:"Deposit coins from your wallet into your bank account.",
  category:"Economy",
  react:"💳",
    start:async(client,m,{command,prefix,pushname , pushName,args})=>{

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

    


    const buttons = [
      {buttonId: `${prefix}bank`, buttonText: {displayText: 'Bank'}, type: 1},
      {buttonId: `${prefix}gamble`, buttonText: {displayText: 'Gamble'}, type: 1},
      {buttonId: `${prefix}wallet`, buttonText: {displayText: 'Wallet'}, type: 1}
    ]
    
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
    const buttonMessage = {
        image: {url: 'https://www.bbva.com/wp-content/uploads/en/2017/08/banking-innovation-technology-internet-payment-gateway-nimble-entrepreneurship-bbva.jpg'},
        caption: buttonText,
        footer: 'Ari-Ani',
        buttons: buttons,
        headerType: 4
    }
    
     await client.sendMessage(m.from, buttonMessage)
  }
};
