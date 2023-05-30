module.exports = {
	name: "revoke",
	alias: ["revok"],
	desc: "Revokes the group link.",
    usage: `${prefa}revoke`,
	react:"✅",
	category: "Group",
	start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
        // if (m.from == "120363040838753957@g.us")
        //   return reply(
        //     "Sorry, this command is not allowed in *Ari-Anio Support Group* !\n\nYou are not allowed to change support group link !"
        //   );
        if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
        if(!isBotAdmin) return m.reply("Make me admin to use this command")
        await client.groupRevokeInvite(m.from).then((res) =>
        client.sendMessage(
            m.from,
            { text: `Group link has been *Updated* Successfully!` },
            { quoted: m }
          )
        );
          }
        }