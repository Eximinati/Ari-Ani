require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "repo",
    alias: ["Ari-ani" ,"Ari-Ani", "ariani" ],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "ā",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://images6.alphacoders.com/103/1037400.png',
            'https://images3.alphacoders.com/110/1105901.jpg',
            'https://images5.alphacoders.com/102/1028689.jpg',
            'https://images4.alphacoders.com/102/1029828.png',
            'https://wallpaperaccess.com/full/1105099.jpg',
            'https://images8.alphacoders.com/120/1206602.png'
          ]
let nezuko = await axios.get('https://api.github.com/repos/Eximinati/Ari-Ani')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `āØ _*Ari-Ani*_  āØ\n\nš *Description:* ${nezuko.data.description}\n\n š *Repo Link:* ${nezuko.data.html_url} \n\n š  *Total Star:* ${nezuko.data.stargazers_count}\n\n š *Total Forks:* ${nezuko.data.forks} \n\n šš»āāļø *Tutorial:* https://www.youtube.com/watch?v=KqgyScOlvV8 \n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}