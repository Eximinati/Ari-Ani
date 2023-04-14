const axios = require("axios");
const fs = require("fs");
require("../../../settings");
module.exports = {
  name: "nneko",
  alias: ["nsfwneko"],
  usage: `${prefa}nneko`,
  desc: "Gives you random hentai neko image",
  category: "Nsfw",
  react: "💦",

  category: "Nsfw",
  start: async (client, m, { command, prefix, text, args }) => {
    if (!nsfw.includes(`${m.from}`))
      return m.reply("*❌ This not a hentai group pervert*");

    let wife = await axios.get("https://api.waifu.pics/nsfw/neko");
    
    client.sendMessage(m.from, {image: { url: wife.data.url },caption: `*🥵 NYAAAAAAA*`,}, { quoted: m });
  },
};
