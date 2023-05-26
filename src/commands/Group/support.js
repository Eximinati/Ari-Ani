module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
  usage: `${prefa}support`,
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://telegra.ph/file/f0c24da2961de0bede5e1.mp4',
                   'https://telegra.ph/file/f7d87038dc8c486c1a094.mp4',
                   'https://telegra.ph/file/672375c8205e1f126f200.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const Arilogogg = "https://i.ibb.co/kcz5R14/Whats-App-Image-2023-02-27-at-12-32-54-AM.jpg"
        
                         
const lemo = `
*━『 Support Group Links 』━*



* [ Galaxia Support ] :*
https://chat.whatsapp.com/DZqkUYiWJj306q4n3ePHFc

* [ Galaxia Casino ] :*
https://chat.whatsapp.com/KkmH0lLQBWu3d8YWZPtpdl
`
  await client.sendMessage(m.from,{video:{url:rae}, gifPlayback:true, caption: `*${pushName}* have a look in your DM`},{quoted:m})
  await  client.sendMessage(m.sender,{image:{url:Arilogogg},caption:lemo},{quoted:m})  
    }
}
