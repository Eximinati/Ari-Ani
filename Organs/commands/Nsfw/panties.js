const ecchi = require("../../../lib/hentai.json")
require ('../../../settings')
module.exports={
    name:"panties",
    alias:["pantsu"],
    usage:`${prefa}panties`,
    desc:"Gives you hentai panties image",
    react:"💦",

    category:"Nsfw",
    start:async(client,m,{command,prefix,text,args})=>{
    if(!nsfw.includes(`${m.from}`)) return m.reply('*❌ This not a hentai group pervert*')

    let wife = ecchi.panties
    let ass = wife[Math.floor(Math.random() * wife.length)]

   let buttons = [
    {buttonId: `${prefix}pantsu`, buttonText: {displayText: '>>'}, type: 1}
    ]

    let buttonMessage = {
        image: {url:ass},
        caption: `*👙*`,
        footer: `Ari-Ani`,
        buttons: buttons,
        headerType: 4
    }
    client.sendMessage(m.from, buttonMessage, { quoted: m })

    }
}