const YT = require('../../lib/ytdl')
const yts = require("youtube-yts");

require ('../../../settings')
module.exports={
    name:"ytv",
    alias:["ytmp4"],
    usage:`${prefa}yta yotube_link`,
    desc:"Downloads the video from youtube links",
    category:"Media",
    react:"✅",
    start:async(client,m,{command,prefix,text,args})=>{  
        try{

        const link = async (args) => {
          const { videos } = await yts(args.trim())
          if (!videos || !videos.length) return null
          return videos[0].url
      }
      if (!text) return m.reply('❌ Please provide a valid YouTube link to get the lyrics.')
      const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
      const term = validPathDomains.test(text) ? text.trim() : await link(text)
      if (!term) return m.reply('❌ Please provide a valid YouTube link to get the lyrics')
      if (!YT.validateURL(term.trim())) return m.reply('❌ Please provide a valid YouTube link to get the lyrics.')
      const { videoDetails } = await YT.getInfo(term)
      m.reply('🔍 Searching for video...')
      let caption = `🎵 *_Title:_* ${videoDetails.title} | 🎧 *_Type:_* Video | 🎤 *_From:_* ${videoDetails.ownerChannelName}`
      client.sendMessage(
          m.from,
          {
              image: {
                  url: `https://i.ytimg.com/vi/${videoDetails.videoId}/maxresdefault.jpg`
              },
              caption
          },
          {
              quoted: m
          }
      )
      if (Number(videoDetails.lengthSeconds) > 1800) return m.reply('❌ Cannot download video longer than 30 minutes')
      const audio = YT.getBuffer(term, 'video')
          .then(async (res) => {
              await client.sendMessage(
                  m.from,
                  {
                      document: res,
                      mimetype: 'video/mp4',
                      fileName: videoDetails.title + '.mp4'
                  },
                  {
                      quoted: m
                  }
              )
          })
          .catch((err) => {
              return m.reply(err.toString())
              client.log(err, 'red')
          })
      }
          //Our beloved error chan. No one can stop her!
  catch(err){
    await client.sendMessage(m.from , {text: `Error-Chan Dis\n\nError:\n${err}`})
  }
  }
}
//M.quoted.mtype === 'imageMessage',
