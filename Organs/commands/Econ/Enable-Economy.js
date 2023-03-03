const Group = require("../../../models/group");

module.exports = {
    name: 'enableconomy',
    alias:["enableconomy"],
    usage:`${prefa}enableconomy`,
    desc:"enable economy for a specific group (mods only)",
    category:"Economy",
    react:"💸",
      start:async(client,m,{iscreator , pushName,tagId})=>{

        
      

    //     if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')

    // else if (!m.from.endsWith("@g.us")) {
    //   return m.reply("Please use this command in a group.");
    // }
    if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})

    const groupId = m.from;

   
      
      const group = await Group.findOne({ groupId });
      if (!group) {
        const newGroup = new Group({ groupId, enabled: true });
        await newGroup.save();
      } else if (!group.enabled) {
        group.enabled = true;
        await group.save();
      } else{
      m.reply("Bot is now enabled in this group.");
    }
    
  },
};
