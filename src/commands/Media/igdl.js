const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')
const axios = require('axios')
module.exports = class command extends Command {
    constructor() {
        super('igdl', {
            description: 'download instagram video',
            usage: 'igdl',
            category: 'Media',
            exp: 20,
            dm: false,
            cooldown: 50
        })
    }

    /**
     * @param {Message} m
     * @param {args} args
     * @returns {Promise<void>}
     */

    execute = async (m, args) => {
        let {context} = args
        let arg = context
        if (!arg === null)
      return this.client.sendMessage(
        m.from,
        { text: `❌ No Link Provided!` },
        { quoted: m.message }
      );
    if (!arg.includes("instagram.com"))
      return this.client.sendMessage(
        m.from,
        { text: `❌ Invalid Link` },
        { quoted: m.message }
      );
    

      var queryURL = arg
      m.reply("*Wait. Your video is being downlaoding!*")
      let res = await axios.get("https://fantox001-scrappy-api.vercel.app/instadl?url=" + queryURL)
      const scrappedURL = res.data.videoUrl
      
      return this.client.sendMessage(m.from, { video: { url: scrappedURL } ,  caption: 'Here you go '},{ quoted: m.message } );
  }
}
