const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "advice",
    alias: ['lifedvice'],
    desc: "Gives you random advices for your broken life.",
    usage:`${prefa}advice`,
    category: "Education",
    react:"📛",

    start: async(client, m,{ text, quoted, args }) => {
        await axios
            .get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                // console.log(response);
                const text = `*Advice for you🔖:* ${response.data.slip.advice}`
                m.reply(text)
            })
            .catch((err) => {
                m.reply(`🔍 Error: ${err}`)
            })
        }
    }
