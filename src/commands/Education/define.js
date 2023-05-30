const axios = require('axios')
const fs=require("fs")
require ('../../../settings')
module.exports={
    name:"define",
    alias:['dictionary'],
    usage:`${prefa}define [Your word]`,
    desc:"Gives you the meaning of your word ",
    category:"Education",
    react:"📖",
    
    start:async(client,m,{command,prefix,args})=>{

if (!q) return m.reply(`Please give me text.`)
try {
    const  data  = await axios.get(`https://urban-dictionary-api.0xn1nja.repl.co/api?word=${q}`);

const res = data.data
    let img = res.mug_back_image;
    // const { definition, example } = data.list[0];
    const reply = `
*🔠 Word:* ${q}
*📖 Definition:* ${res.meaning.replace(/\[|\]/g, '')}
*💭 Example:* ${res.example.replace(/\[|\]/g, '')}
    `;
   client.sendMessage(m.from,{image: {url: img} ,caption:reply},{quoted:m})
} catch (err) { 
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
  }
}
