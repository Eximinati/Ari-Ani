const fs = require("fs");
const axios = require('axios')

require("../../../settings");
module.exports = {
  name: "animequote",
  alias: ["aniquote" , "aq"],
  usage: `${prefa}anime <any anime name>`,
  desc: "Gives you details of anime.",
  react: "✅",
  category: "Weeb",
  start: async (client, m, { command, prefix, text, args }) => {
    try {
      if (!text) return m.reply(`❌ No character name provided!`);
      
      const api = await axios.get(`https://animechan.vercel.app/api/random/character?name=${text}`)
      let fetch = api.data
  
      let randomText = `*✏ Quote: ${fetch.quote}*\n\n*🎗 Said by: ${fetch.character}*\n\n*📛 Source: ${fetch.anime}*`;
  
      m.reply(randomText)
    } catch (error) {
      console.error(error);
      m.reply("❌ An error occurred while fetching the quote. Please try again later.")
    }
  }
}