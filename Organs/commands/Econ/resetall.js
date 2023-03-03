const Economy = require("../../../models/economic");

module.exports = {
  name: "resetall",
  alias:["resetall"],
  usage:`${prefa}resetall`,
  desc:"Reset whole db",
  category:"Economy",
  cool: 3,
  react:"💸",
    start:async(client,m,{yaOwn,prefix , pushName,tagId})=>{
    if (!m.from.endsWith("@g.us")) {
      return m.reply("Please use this command in a group.");
    }

    try {
      await Economy.updateMany({}, { wallet: 100 });
      m.reply("All wallets have been reset to 100 coins.");
    } catch (err) {
      console.error(err);
      m.reply("An error occurred while trying to reset wallets.");
    }
  },
};
