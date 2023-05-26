module.exports={
    name:"broadcast",
    alias:["bc"],
    usage:"=bc message",
    desc:"Broadcast messages to the groups",
    category:"Mods",
    react:"✅",

    start:async(client,m,{command,prefix,text,pushName,participants,args,iscreator,body,quoted,mime})=>{
        if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
        if (!text && !m.quoted)
      return client.sendMessage(
        m.from,
        {
          text: `Please provide a message to broadcast !\n\nExample: ${prefix}bc Hello everyone!`,
        },
        { quoted: m }
      );

    const broadcastText = m.quoted ? m.quoted.msg : args ? args.join(" ") : "";

    let FetchGC = await client.groupFetchAllParticipating();
    let group = Object.entries(FetchGC)
      .slice(0)
      .map((entry) => entry[1]);
    let anu = group.map((v) => v.id);
    m.reply(`*Broadcasting message to ${anu.length} groups...*`);
    
    for (let i of anu) {
      let txt = `*「  ✨ Galaxia Broadcast 🚀  」*\n\n*✉ Message:* ${broadcastText}\n\n\n*👑 Regards ~ ${pushName}*`;

      client.sendMessage(i, {
        video: { url: "https://telegra.ph/file/672375c8205e1f126f200.mp4"},
        gifPlayback: true,
        caption: txt,
        mentions: participants.map((a) => a.id),
      });
    }

    m.reply(`*Broadcasting message to ${anu.length} groups completed !*`);
  },
} 
