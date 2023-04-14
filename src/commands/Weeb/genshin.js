const genshin = require("genshin-api")
require ('../../../settings')
module.exports = {
    name: "genshin",
    alias: ["gchara" , "gi"],
    usage: `${prefa}genshin <any genshin characher name>`,
    desc: "Gives you details of genshin characher.",
    react: "✅",
    
    category: "Weeb",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
try {
if (!text) return m.reply(`❌ No query provided!`)
    // if(text.startsWith("QWERTYUIOPASDFGHJKLZXCVBNM"))
    const anime = await genshin.Characters(`${text}`)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🌏 *Birthday:* ${anime.birthday}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`


let image = `https://api.genshin.dev/characters/${text}/portrait` 
// await client.sendMessage(m.from,{ caption:txt},{quoted:m})

m.reply(
    `${txt} image:${image}`
)

} catch (err) {
console.log(err)
return m.reply ('⚠️ Something Went Wrong')
}}
}
