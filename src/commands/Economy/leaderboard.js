const economyModel = require("../../models/economic");

module.exports = {
    name: 'leaderboard',
    alias: ['lb'],
    usage: `${prefa}leaderboard`,
    desc: 'Displays the economy leaderboard.',
    category: 'Economy',
    react: '📈',
    cool:3,
    start: async (client, m, { prefix, pushname }) => {
        const topUsers = await economyModel.find().sort({ wallet: -1 }).limit(10);
        if (!m.from.endsWith("@g.us")) {
            return m.reply("Please use this command in a group.");
          }
        let response = `💵 Economy Leaderboard 💵\n`;
        for (let i = 0; i < topUsers.length; i++) {
            const user = topUsers[i];
            const name = user.userId;
            const wallet = user.wallet;
            response += `${i+1}. ${name}: ${wallet} coins\n`;
        }

       
        await client.sendMessage(m.from , { text: response })
    }
}
