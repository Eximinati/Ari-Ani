const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "fact",
    alias: ['fax'],
    desc: "Gives you random facts.",
    usage:`${prefa}fact`,
    category: "Education",
    react:"📛",

    start: async(client, m,{ text, quoted, args }) => {
        await axios
.get(`https://nekos.life/api/v2/fact`)
.then((response) => {
  // console.log(response);
  const text = `📛 *Fact:* ${response.data.fact}`;
  m.reply(text);
})
.catch((err) => {
  m.reply(`✖  An error occurred.` + err);
})
    }

}
