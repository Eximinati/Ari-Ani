const { Sticker, StickerTypes } = require("wa-sticker-formatter");
require('../../../settings')
module.exports = {
    name: "sticker",
    alias: ["sticker","s"],
    desc: "makes sticker from images/videos/gifs",
    category: "Utils",
    react:"✅",

    start: async(client, m,{pushName,body,quoted,mime,text,args,flags}) => {
       if(!quoted) return await client.sendMessage(m.from,{text:"Reply/tag a image/video"})
       flags.forEach((flag) => (text = text.replace(flag, '')))
 
       pack = 'Ari'
       author = ''
        
       
           
       if (/image/.test(mime)) {
        let mediaMess = await quoted.download();
        let stickerMess = new Sticker(mediaMess, {
          pack: packname,
          author: pushName,
          type: StickerTypes.FULL,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 70,
          background: "transparent",
        });
        const stickerBuffer = await stickerMess.toBuffer();
        client.sendMessage(m.from, { sticker: stickerBuffer }, { quoted: m });
      } else if (/video/.test(mime)) {
        let mediaMess = await quoted.download();
        if ((quoted.msg || quoted).seconds > 15)
          return client.sendMessage(
            m.from,
            { text: "Please send video less than 15 seconds." },
            { quoted: m }
          );
        let stickerMess = new Sticker(mediaMess, {
          pack: packname,
          author: pushName,
          type: StickerTypes.FULL,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 70,
          background: "transparent",
        });
        const stickerBuffer2 = await stickerMess.toBuffer();
        client.sendMessage(m.from, { sticker: stickerBuffer2 }, { quoted: m });
      } else {
        client.sendMessage(
          m.from,
          {
            text: `Please mention an *image/video* and type *${prefix}s* to create sticker.`,
          },
          { quoted: m }
        );
      }
      
    }
}