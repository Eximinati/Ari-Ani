module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-nezuko-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/nezuko-kamado-nezuko.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/nezuko-nezuko-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/nezuko-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Arilogogg = "https://i.ibb.co/kcz5R14/Whats-App-Image-2023-02-27-at-12-32-54-AM.jpg"
        
                         
const lemo = `
*━『 Support Group Links 』━*



* [ Ari-Ani Support ] :*
https://chat.whatsapp.com/DZqkUYiWJj306q4n3ePHFc

* [ Ari-Ani Casino ] :*
https://chat.whatsapp.com/KkmH0lLQBWu3d8YWZPtpdl
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Arilogogg},caption:lemo},{quoted:m})  
    }
}