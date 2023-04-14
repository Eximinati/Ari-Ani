require("./MessageHandler");

module.exports = async (client, m) => {
  const myID = client.user.id.split(":")[0] + "@s.whatsapp.net";
  
  try {
    const metadata = await client.groupMetadata(m.id);
    const participants = m.participants;
    const customWelcomeMsgs =  await db.get("customWelcomeMsgs");
    const defaultWelcomeMsg = `*@{{name}}* *Welcome to* ${metadata.subject} 🍁\n🎋 *Group Description:*\n${metadata.desc}`;
    const welcomeMsg = customWelcomeMsgs[m.id] || defaultWelcomeMsg;
  
    participants.forEach(async (num) => {
      const profilePictureUrl = await client.profilePictureUrl(num, "image").catch(() => "https://wallpapercave.com/wp/wp6960556.jpg");
      const { action } = m;
  
      if (action === "add") {
        const name = num.split("@")[0];
        const caption = welcomeMsg.replace("{{name}}", name);
        await client.sendMessage(m.id, { image: { url: profilePictureUrl }, mentions: [num], caption });
      } else if (action === "remove") {
        const captionText = `@${num.split("@")[0]} bye bye, we will not miss you`
        await client.sendMessage(m.id, { image: { url: profilePictureUrl },  mentions: [num] , caption:captionText });
      }
    });
  } catch (error) {
    console.log(error);

  }
};