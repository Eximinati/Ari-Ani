const  items = require("../../../models/shop");
const Group = require("../../../models/group")

module.exports = {
  name: 'shop',
  alias: ['shop'],
  desc: 'View available items for sale.',
  category: 'Economy',
  react: '✅',
  usage: '/shop',
  start:async (client, m, args) => {
    if (!m.from.endsWith("@g.us")) {
      return m.reply("Please use this command in a group.");
    }

    const groupId = m.from;

    
      const group = await Group.findOne({ groupId });
      if (!group || !group.enabled) {
        return m.reply("Economy is not enabled in this group. Type '.support' to see casino group link ");
      }
      
    let message = "Items available in the shop:\n";
    items.forEach(item => {
      message += `Name: ${item.itemName} Desc: ${item.description} Price: ${item.price} ItemNumber: ${item.number}\n`;
    });
    m.reply(message);
  }
};
