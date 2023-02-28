const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"spank",
    alias:["spank"],
    usage:`${prefa}spank`,
    desc:"Basically spanking you or your mom?",
    category:"Reaction",
    react:"💦",
start:async(client,m,{command,nsfw,prefix,text})=>{
  if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
  let spank = await axios.get ("http://api.nekos.fun:8080/api/spank");

  try {
    let user1 = m.sender;
    let recp = ``;
    try {
      if(!args[0]&&!m.quoted){
          user2 = "none";
      }
      else if(m.quoted){
          user2 = m.quoted.sender;
      }else if(mentionByTag){
          user2 = mentionByTag[0];
      
      }
      else{
           user2 = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
      }
    
      ment = [user1, user2];
    } catch {
      user2 = "none";
      ment = [user1, m.sender];
    }
    if (user2 == "none") {
      recp = `@${m.sender.split("@")[0]} spanked themselves`;
      console.log(recp);
    } else {
      var rcpp = `@${user2.split("@"[0])}`;
      recp = `@${m.sender.split("@")[0]} is spanking @${user2.split("@")[0]} `;

      console.log(recp);
    }

  var spankBuffer = await fetchBuffer(spank.data.image);
  var spankGif = await buffergif(spankBuffer);

  await client.sendMessage(
    m.from,
    {
      video: spankGif,
      gifPlayback: true,
      mentions: ment,
      caption: recp,
    },
    { quoted: m }
  );

} catch (error) {
      console.log(error);
    }
  }
}
