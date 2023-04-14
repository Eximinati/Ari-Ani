const Economy = require("./economic");

module.exports = {
  viewInventory: async (userId) => {
    const economyData = await Economy.findOne({ userId: userId });
    if (!economyData) {
      return 'You do not have an economy account yet.';
    }

    const inventoryData = economyData.inventory;
    if (!inventoryData || inventoryData.length === 0) {
      return 'You do not have any items in your inventory.';
    }

    let inventoryList = 'Your inventory:\n';
    inventoryData.forEach((item, index) => {
      inventoryList += `${index + 1}. ${item.name} x${item.quantity}\n`;
    });

    return inventoryList;
  },

  buyItem: async (userId, itemName, itemPrice) => {
    const economyData = await Economy.findOne({ userId: userId });
    if (!economyData) {
      return false;
    }

    const inventoryData = economyData.inventory;
    let inventoryItem = inventoryData.find(invItem => invItem.name === itemName);
    if (!inventoryItem) {
      inventoryItem = { name: itemName, quantity: 0 };
      inventoryData.push(inventoryItem);
    }

    if (economyData.wallet < itemPrice) {
      return false;
    }

    economyData.wallet -= itemPrice;
    inventoryItem.quantity++;

    await economyData.save();
    return true;
  },

  sellItem: async (userId, itemName, itemPrice) => {
    const economyData = await Economy.findOne({ userId: userId });
    if (!economyData) {
      return false;
    }

    const inventoryData = economyData.inventory;
    let inventoryItem = inventoryData.find(invItem => invItem.name === itemName);
    if (!inventoryItem || inventoryItem.quantity === 0) {
      return false;
    }

    economyData.wallet += itemPrice;
    inventoryItem.quantity--;

    if (inventoryItem.quantity === 0) {
      economyData.inventory = inventoryData.filter(invItem => invItem.name !== itemName);
    }

    await economyData.save();
    return true;
  }
};
