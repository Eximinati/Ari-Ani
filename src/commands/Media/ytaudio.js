const YT = require('../../lib/ytdl')
const {
    isUrl,
    fetchBuffer
} = require('../../lib/Function')
const fs = require("fs")
const yts = require("yt-search")
require('../../../settings')
module.exports = {
    name: "ytaudio",
    alias: ["playa", "yta", "mp3"],
    usage: `${prefa}play <query>`,
    desc: "Plays the song...",
    category: "Media",
    react: "✅",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
        const link = async (terms) => {
            const {
                videos
            } = await yts(terms)
            if (!videos || !videos.length) return null
            return videos[0].url
        }
        if (!text) return m.reply('❌ Please provide a valid YouTube link to get the lyrics.')
        const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
        const term = validPathDomains.test(text) ? text.trim() : await link(text)
        if (!term) return m.reply('❌ Please use this command with a valid youtube contant link')
        if (!YT.validateURL(term.trim())) return m.reply('❌ Please provide a valid YouTube link to get the lyrics.')
        const {
            videoDetails
        } = await YT.getInfo(term)
        m.reply('🔍 Searching for lyrics...')
        let caption = `🎵 *_Title:_* ${videoDetails.title} | 🎧 *_Type:_* Audio | 🎤 *_From:_* ${videoDetails.ownerChannelName}`
        client.sendMessage(
            m.from, {
                image: {
                    url: `https://i.ytimg.com/vi/${videoDetails.videoId}/maxresdefault.jpg`
                },
                caption
            }, {
                quoted: m
            }
        )
        if (Number(videoDetails.lengthSeconds) > 1800) return m.reply('❌ Cannot download audio longer than 30 minutes')
        const audio = YT.getBuffer(term, 'audio')
            .then(async (res) => {
                await client.sendMessage(
                    m.from, {
                        document: res,
                        mimetype: 'audio/mpeg',
                        fileName: videoDetails.title + '.mp3'
                    }, {
                        quoted: m
                    }
                )
            })
            .catch((err) => {
                return m.reply(err.toString())
                client.log(err, 'red')
            })
    }
}
