const  items = require("../../../models/shop")
module.exports = {
  name: 'shop',
  alias: ['shop'],
  desc: 'View available items for sale.',
  category: 'Economy',
  react: '✅',
  usage: '/shop',
  start:async (client, m, args) => {
    let message = "Items available in the shop:\n";
    items.forEach(item => {
      message += `Name: ${item.itemName} Desc: ${item.description} Price: ${item.price} ItemNumber: ${item.number}\n`;
    });
    m.reply(message);
  }
};
