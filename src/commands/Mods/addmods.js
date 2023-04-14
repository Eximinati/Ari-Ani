module.exports={
    name:"addmod",
    alias:["addMod"],
    usage:"=addmod @user",
    desc:"add users from using commands",
    category:"Mods",
    react:"✅",
    start:async(client,m,{text,ban,pushName,mentionByTag,yaOwn,args,body,quoted,mime})=>{
        // const userId = args[0];

        const mention= await mentionByTag

        let userId = await (mention[0]) || m.msg.contextInfo.participant

        console.log(userId)
    if (!userId) return m.reply('Please specify a user ID.');

    // Check if user already a moderator
    if (yaOwn.includes(userId)) {
      return m.reply('User is already a moderator.');
    }

    // Add user to moderators list
    yaOwn.push(userId);
    m.reply(`Added ${userId} as a moderator.`);
  },
};