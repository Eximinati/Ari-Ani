module.exports = async (client, m) => {
  try {
    const myID = `${client.user.id.split(":")[0]}@s.whatsapp.net`;
    const metadata = await client.groupMetadata(m.id);
    const participants = m.participants;
    const customWelcomeMsgs = await db.get("customWelcomeMsgs");
    const defaultWelcomeMsg = `*@{{name}}* *Welcome to* ${metadata.subject} 🍁\n🎋 *Group Description:*\n${metadata.desc}`;
    const welcomeMsg = customWelcomeMsgs[m.id] || defaultWelcomeMsg;

    for (const num of participants) {
      const profilePictureUrl = await client.profilePictureUrl(num, "image").catch(() => "https://wallpapercave.com/wp/wp6960556.jpg");
      const { action } = m;

      let caption = '';
      if (action === "add") {
        const name = num.split("@")[0];
        caption = welcomeMsg.replace("{{name}}", name);
      } else if (action === "remove") {
        caption = `@${num.split("@")[0]} bye bye, we will not miss you`;
      }

      await client.sendMessage(m.id, { image: { url: profilePictureUrl }, mentions: [num], caption });
    }
  } catch (error) {
    console.log(error);
  }
};
