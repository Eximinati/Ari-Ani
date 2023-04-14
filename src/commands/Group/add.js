require ('../../../settings')
module.exports = {
	name: "add",
	alias: ["Add"],
	usage:`${prefa}add num`,
	desc: "dd Member to group",
	category: "Group",
	react:"✅",
	start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
		if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
		if(!isBotAdmin) return m.reply("Make me admin to use this command")

		const number = q.replace(/\D+/g,'').replace(/\s+/g,'').toString();
console.log(number) ;

if (!number.length) return m.reply(`Please write the user's number you want to add`)
try {
if(!client.onWhatsApp(m.from,[`${number}@s.whatsapp.net`])) return m.reply(`the person you are trying to add is not on whatsapp`)

		

			await client.groupParticipantsUpdate(m.from, [`${number}@s.whatsapp.net`], "add")
			await client.sendMessage(m.from,{text:`Successfully added`},{quoted:m})
		} catch (error) {
			console.error(error);
			await client.sendMessage(m.from, {text: `An error occurred: ${error.message}`}, {quoted: m});
		}
	},
}