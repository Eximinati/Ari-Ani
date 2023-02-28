const fs = require("fs");
require("./MessageHandler");
module.exports = async (client, m) => {
  
    const myID = client.user.id.split(":")[0] + "@s.whatsapp.net";
    try {
      const metadata = await client.groupMetadata(m.id);
      const participants = m.participants;
      const welcomeEvents = await db.get("events") || [];
    
      participants.forEach(async (num) => {
        const profilePictureUrl = await client.profilePictureUrl(num, "image").catch(() => "https://wallpapercave.com/wp/wp6960556.jpg");
        const { action } = m;
    
        if (action === "add" && welcomeEvents.includes(m.id)) {
          const caption = `*@${num.split("@")[0]}* *Welcome to* ${metadata.subject} 🍁\n🎋 *Group Description:*\n${metadata.desc}`;
          await client.sendMessage(m.id, { image: { url: profilePictureUrl }, mentions: [num], caption });
        } else if (action === "remove" && welcomeEvents.includes(m.id)) {
          const captionText = `@${num.split("@")[0]} bye bye, we will not miss you`
          await client.sendMessage(m.id, { image: { url: profilePictureUrl },  mentions: [num] , caption:captionText });
        }
      });
    } catch (error) {
      console.log(error);
    }
    
};
