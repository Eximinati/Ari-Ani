const axios = require('axios')
require ('../../../settings')
module.exports = {
    name: "joke",
    alias: ["Joke"],
    desc: "Gives you random jokes.",
    usage:`${prefa}joke`,
    category: "Education",
    react:"📛",

    start: async(client, m,{ text, quoted, args }) => {
        await axios
.get(`https://v2.jokeapi.dev/joke/Any`)
.then((response) => {
  // console.log(response);
  const text = `🎀 *Category:* ${response.data.category}\n📛 *Joke:* ${response.data.setup}\n🎗️ *Delivery:* ${response.data.delivery}`;
  m.reply(text);
})
.catch((err) => {
  m.reply(`✖  An error occurred.`);
});
    }
}
