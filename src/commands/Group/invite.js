require ('../../../settings')
module.exports = {
	name: "invite",
	alias: ["gcinvite" , "inv"],
	desc: "Group Invite",
    usage:`${prefa}invite`,
    react:"✅",
	category: "Group",
	start: async(client, m, { text, groupName,flags, args,command,isAdmin,participants,groupAdmin,pushName,iscreator}) => {
		const code = await client.groupInviteCode(m.from)
m.reply("https://chat.whatsapp.com/" + code)
let dm = '📪Sent you the Group Link in personal message.'
let lemo = `*Invite link:* https://chat.whatsapp.com/${code}`


await client.sendMessage(m.from,{text: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{text:lemo},{quoted:m})  

    }
}