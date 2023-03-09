const Group = require("../../../models/group");

module.exports = {
    name: 'disableconomy',
    alias:["disableconomy"],
    usage:`${prefa}disableconomy`,
    desc:"disable economy for a specific group (mods only)",
    category:"Economy",
    react:"💸",
      start:async(client,m,{iscreator , pushName,tagId})=>{

    if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})

    const groupId = m.from;
    // const group = await Group.findOne({ groupId });
    
    // Check if the group is already disabled
    const group = await Group.findOne({ groupId });
    if (group && !group.enabled) {
      return message.reply("The economy feature is already disabled for this group.");
    }


    if (!group) {
        const newGroup = new Group({ groupId, enabled: false });
        await newGroup.save();
      } else {
        group.enabled = false;
        await group.save();
      }
  
      m.reply("The economy feature has been disabled for this group.");
    },
    
 
};