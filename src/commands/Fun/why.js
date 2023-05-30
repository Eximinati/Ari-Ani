const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "why",
    alias: ["Why"],
    desc: "Gives you random whys.",
    usage:`${prefa}why`,
    category: "Fun",
    react:"📛",

    start: async(client, m,{ text, quoted, args }) => {
        await axios
.get(`https://nekos.life/api/v2/why`)
.then((response) => {
  // console.log(response);
  const text = `📝 *Question:* ${response.data.why}`;
  m.reply(text);
})
.catch((err) => {
  m.reply(`🔍 Error: ${err}`);
});
}
}