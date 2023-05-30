const YT = require('../../lib/ytdl')
const {
    isUrl,
    fetchBuffer
} = require('../../lib/Function')
const fs = require("fs")
const yts = require("yt-search")
require('../../../settings')
module.exports = {
    name: "tiktok",
    alias: ["tiktokdl"],
    usage: `${prefa}tiktok <link>`,
    desc: "Download the video...",
    category: "Media",
    react: "✅",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
        if (!text)
        return client.sendMessage(
          m.from,
          { text: `⚠️ Please provide a Tiktok Video link !` },
          { quoted: m }
        );

        if(!text.includes("tiktok")){
          return m.reply("⚠️ Please provide a valid Tiktok link!")
        }

        require('../../lib/tiktokscrapper').Tiktok(text).then( data => {
            client.sendMessage(m.from, { video: { url: data.watermark },caption:`For Aku by aku`},{ quoted: m })
        })
        },
    }