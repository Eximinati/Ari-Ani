const axios = require('axios')
module.exports={
    name:"fact",
    alias:["facts"],
    usage:"td",
    desc:"truth_dare",
    category:"Fun",
    react:"✅",

    start:async(client,m,{command,prefix,text,pushName,participants,args,iscreator,body,quoted,mime})=>{
        await axios
            .get(`https://nekos.life/api/v2/fact`)
            .then((response) => {
                const text = `Fact for you: ${response.data.fact}`
                m.reply(text)
            })
            .catch((err) => {
                m.reply(`🔍 Error: ${err}`)
            })
    }
}