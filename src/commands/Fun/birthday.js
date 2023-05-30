module.exports = {
    name: "birthday",
    alias: ['happybirthday','happyBirthday', 'hbd'],
    desc: "List all command",
    usage: `${prefa}birthday [mention/quote]`,
    category: "Fun",
    react:"✅",
    start: async(client, m, { mentionByTag, args, prefix, text, toUpper }) => {
        const mention= await mentionByTag

        let userss = await (mention[0]) || m.msg.contextInfo.participant
        let userProfile = await db.get(`${m.sender}.icon`)
            if (userProfile) {
                ppuser = userProfile
            } else {
                try {
                    ppuser = await client.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg'
                }
            }

            let tex = `Cheers to you for another trip around the sun The day is all yours 💙Maybe you receive the greatest of joys and everlasting bliss. You are a gift yourself, and you deserve the best of everything. Happy birthday•\n 🥂🎂💙 *HAPPY BIRTHDAY* 🎂🥂\n🥳🥳🥳✨ Enyoy this special day in celebration of a most wonderful you🙂🥳🤩😍  *@${userss.split('@')[0]}*\n\n`
            let typeR = await db.get(`${m.sender}ooicon-y`) || "img"
            if (typeR == "img") {
                return client.sendMessage(m.from, {
                    image: {
                        url: ppuser
                    },
                    caption: tex,
                    mentions:[userss]
                }, {
                    quoted: m
                })
            } else if (typeR == "gif") {
                const response = await axios.get(userProfile, {
                    responseType: 'arraybuffer'
                })
                const buffer = Buffer.from(response.data, "utf-8")
                var sgif = await buffergif(buffer)
                client.sendMessage(m.from, {
                    video: sgif,
                    gifPlayback: true,
                    caption: tex
                }, {
                    quoted: m
                })
            }
    }
}