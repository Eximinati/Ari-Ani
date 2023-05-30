require ('../../../settings')
// prettier-ignore
const checks = ['awesomecheck', 'greatcheck', 'gaycheck', 'cutecheck', 'lesbiancheck', 'hornycheck', 'prettycheck', 'lovelycheck', 'uglycheck', 'beautifulcheck', 'handsomecheck', 'charactercheck']

module.exports = {
	name: "checkuser",
	alias: ['cu'   , ...checks],
	desc: "Checks on user",
    usage:`${prefa}cu`,
    react:"✅",
	category: "Fun",
	start: async(client, m, { groupName,flags, text,isAdmin,participants,groupAdmin,pushName,iscreator}) => {
        const command = m.body.split(' ')[0].toLowerCase().slice(prefa).trim()
        if (command == 'checkuser' || command == 'cu')
            if (!text) {
                const CheckList = `🎃 *Available Checks:*\n\n- ${checks
                    .map((check) => client.utils.capitalize(check))
                    .join('\n- ')}\n🛠️ *Usage:* ${client.prefix}check [tag/quote user] | ${
                    client.prefix
                }(check) [tag/quote user]\nExample: ${client.prefix}awesomecheck`
                return await m.reply(CheckList)
            }
        if (m.quoted) m.mentions.push(m.participant)
        if (!m.mentions.length) m.mentions.push(m.sender)
        const types = [
            'Compassionate',
            'Generous',
            'Grumpy',
            'Forgiving',
            'Obedient',
            'Good',
            'Simp',
            'Kind-Hearted',
            'patient',
            'UwU',
            'top, anyway',
            'Helpful'
        ]
        const character = types[Math.floor(Math.random() * types.length)]
        const percentage = Math.floor(Math.random() * 100) + 1
        const sentence = command.split('check')
        const title = command.toUpperCase()
        await client.sendMessage(
            m.from,
            {
                text: `*=======[${title}]=======*\n\n @${m.mentions[0].split('@')[0]} is ${
                    command !== 'charactercheck' ? `${percentage}% ${sentence[0]}` : `${percentage}% ${character}`
                }`,
                mentions: [m.mentions[0]]
            },
            {
                quoted: m
            }
        )
    }
}
