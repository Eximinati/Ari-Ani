const Group = require("../../../models/group");

module.exports = {
    name: 'enableconomy',
    alias:["enableconomy"],
    usage:`${prefa}enableconomy`,
    desc:"enable economy for a specific group (mods only)",
    category:"Economy",
    react:"💸",
      start:async(client,m,{yaOwn,prefix , pushName,tagId})=>{

        if (!yaOwn) return m.reply('You do not have permission to reset the user\'s economy data.');
      

    if (!m.from.endsWith("@g.us")) {
      return m.reply("Please use this command in a group.");
    }

    const groupId = m.from;

    try {
      const group = await Group.findOne({ groupId });
      if (!group) {
        const newGroup = new Group({ groupId, enabled: true });
        await newGroup.save();
      } else if (!group.enabled) {
        group.enabled = true;
        await group.save();
      }
      m.reply("Bot is now enabled in this group.");
    } catch (err) {
      console.error(err);
      m.reply("An error occurred while trying to enable the bot in this group.");
    }
  },
};
