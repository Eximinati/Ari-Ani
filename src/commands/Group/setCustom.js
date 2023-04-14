// const db = require("quick.db");

module.exports = {
    name: "setcustom",
    alias: ["sc" , "customdesc"],
    usage: `${prefa}anime <any anime name>`,
    desc: "Gives you details of anime.",
    react: "✅",
    category: "Weeb",
    start: async (client, m, { command, prefix, text, args }) => {
  const groupId = m.from;
 

  if(!text){
    m.reply('please write the fucking text')
  }

  const customWelcomeMsgs = await db.get("customWelcomeMsgs") || {};
  customWelcomeMsgs[groupId] = `${text}`;
  await db.set("customWelcomeMsgs", customWelcomeMsgs);

  await client.sendMessage(
    m.from,
    {text: "Custom welcome message set for this group"}
  );
}

}
