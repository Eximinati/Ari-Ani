const axios = require('axios')
module.exports={
    name:"google",
    alias:["g"],
    cool: 20,
    usage:"/google [Any text or sentence]",
    desc:"Search result from Google.",
    category:"Utils",
    react:"✅",

    start:async(client,m,{command,prefix,text,args})=>{
if (!text)  return m.reply(`Please provide me some text`)
await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyABA9H2sDYVwY0sDE7bqYUxihdixoL3ozM&cx=baf9bdb0c631236e5`)
.then((res) => {
    if (res.status !== 200) return void m.reply(`🔍 Error: ${res.status}`);
    let result = ``;
    for (const item of res.data?.items) {
        result += `*📒 Title* : ${item.title}\n*🔗Link* : ${item.link}\n*🎯 Description* : ${item.snippet}\n\n`;
    }
 let urll = "https://i.ibb.co/23JpZG5/google-logo-png-29532.png"
 client.sendMessage(m.from,{image:{url:urll}, caption:result},{quoted:m})
})
.catch((err) => {
  m.reply(`🔍 Error: ${err}`);
});
},
}

