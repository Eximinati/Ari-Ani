const { buffergif, fetchBuffer } = require('../../../lib/Function')
const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"spank",
    alias:["spank"],
    usage:`${prefa}spank`,
    desc:"Basically an gif of a girl sucking on a sharp blade!",
    category:"Nsfw",
    react:"💦",
start:async(client,m,{command,nsfw,prefix,text})=>{
  if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')    
  let spank = await axios.get ("http://api.nekos.fun:8080/api/spank");
  var spankBuffer = await fetchBuffer(spank.data.image);
  var spankGif = await buffergif(spankBuffer);
  await client.sendMessage(m.from , {video: spankGif , gifPlayback:true , caption: "yamete yo"} , {quoted:m})


    // let gii  = await axios.get(`http://api.nekos.fun:8080/api/spank`)
        
    //     const plese = await axios.get(gii.data.image)
    //             const buf1fer = Buffer.from(plese.data, "utf-8")
    //             var sgifvv = await fetchBuffer(buf1fer)
    //             client.sendMessage(m.from,{video: sgifvv, gifPlayback:true,caption: "Here you go"},{quoted:m})
       

  }
}
