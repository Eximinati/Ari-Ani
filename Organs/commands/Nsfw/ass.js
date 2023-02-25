const ecchi = require("../../../lib/hentai.json")
require ('../../../settings')
module.exports={
    name:"ass",
    alias:["butt"],
    usage:`${prefa}ass`,
    desc:"Gives you hentai ass image",
    category: "Nsfw",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')

    let wife = ecchi.ass
    let ass = wife[Math.floor(Math.random() * wife.length)]

   let buttons = [
    {buttonId: `${prefix} ass`, buttonText: {displayText: '>>'}, type: 1}
    ]

    let buttonMessage = {
        image: {url:ass},
        caption: `*💦*`,
        footer: "Ari-Ani",
        buttons: buttons,
        headerType: 4
    }
    client.sendMessage(m.from, buttonMessage, { quoted: m })

    }
}