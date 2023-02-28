const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { createButtonsMessage } = require('@adiwajshing/baileys');
module.exports={
    name:"shop",
    alias:["shop"],
    usage:`${prefa}shop`,
    desc:"shop",
    category:"Economy",
    react:"✅",
    start:async(client,m,{command,prefix,text,args , pushName, mentionByTag} )=>{
      // let result = await cs.getShopItems({
      //   guild: 'guildID'
      // });
      // let inv = result.inventory;
      // // const embed = new Discord.MessageEmbed()
      // //   .setDescription('Shop!')
      // let textShop = 'Shop!\n';
      // for (let key in inv) {
      //  textShop +=  (`${parseInt(key) + 1} - Price: $${inv[key].price} - **${inv[key].name}:**`, inv[key].description)
      // }

      // await client.sendMessage(m.from , textShop , {quoted:m})

      // let inv = result.inventory;
      // let textShop = 'Shop!\n';
      // for (let key in inv) {
      //   textShop += `${parseInt(key) + 1} - Price: $${inv[key].price} - **${inv[key].name}:** ${inv[key].description}\n`;
      // }
      
      // await client.sendMessage(m.from, {extendedTextMessage: {text: textShop}}, {quoted: m});
      

      
      // let result = await cs.getShopItems({
      //   guild: 'Ari-Ani'
      // });
      
      // const inv = result.inventory;
      // const shopItems = Object.keys(inv).map(key => {
      //   const item = inv[key];
      //   return m.reply(`${parseInt(key) + 1} - Price: $${item.price} - **${item.name}:** ${item.description}`);
      // });
      // const textShop = shopItems.join('\n');
      // await client.sendMessage(m.from, { text: textShop }, { quoted: m });


      let result = await cs.getShopItems({
        guild: 'Ari-Ani'
      });
      let inv = result.inventory;
      let textShop = Object.keys(inv).map(key => {
        return `${parseInt(key) + 1} - Price: $${inv[key].price} - **${inv[key].name}:** ${inv[key].description}\n`;
      }).join('');
      
      // await client.sendMessage(m.from,textShop, { quoted: m });
      m.reply(textShop)
      
      // await client.sendMessage(m.from, {
      //   text: textShop
      // }, {quoted: m});
      
      
}


}