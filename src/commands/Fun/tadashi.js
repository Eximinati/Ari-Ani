const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "tada",
    alias: ["tadashi"],
    desc: "Chat with bot.",
    usage:`${prefa}chat`,
    category: "Education",
    react:"📛",

    start: async(client, m,{ text, args }) => {
        if (!q) return m.reply(' *Baka!* ')
        await axios.get(`https://api.simsimi.net/v2/?text=${q}&lc=en`)
        .then((response) => {
                // console.log(response);
                const text = `🎍 *Ari-Ani*:  ${response.data.success}`
                m.reply(text);
            }).catch(err => {
                m.reply(` *Baka!* `)
            }
            )
        }
    }