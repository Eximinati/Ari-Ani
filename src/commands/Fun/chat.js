const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "chat",
    alias: ['botchat'],
    desc: "Gives you random advices for your broken life.",
    usage:`${prefa}advice`,
    category: "Fun",
    react:"📛",

    start: async(client, m,{ text, quoted, args }) => {
       
        
        await axios
        .get(
          `${encodeURI(`http://api.brainshop.ai/get?bid=174519&key=ZeACimjk1Kd86Uyw&uid=[uid]&msg=${q}`)}`
        )
        .then((res) => {
          if (res.status !== 200)
            return m.reply(`🔍 Error: ${res.status}`);
          return m.reply(res.data.cnt);
        })
        .catch(() => {
          m.reply(`Intriguing...`);
        });
    } 
  };
