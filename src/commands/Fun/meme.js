const axios = require('axios')
module.exports={
    name:"meme",
    alias:["memes"],
    usage:"meme",
    desc:"memes",
    category:"Fun",
    react:"✅",

    start:async(client,m,{command,prefix,text,pushName,participants,args,iscreator,body,quoted,mime})=>{
        const res = await axios.get(`https://meme-api.com/gimme`).catch((err) => {
            return m.reply(err.toString())
        })
        client.sendMessage(m.from, {
            image: {
                url: res.data.url
            },
            caption: `${res.data.title}`
        })
    }
}
