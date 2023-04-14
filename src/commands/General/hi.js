module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Tells hello",
    cool:3,
    react:"✅",
    usage: `${prefa}hi`,
    category: "General",
    start: async(client, m,{pushName}) => {
        if(m.quoted){
            const name= await client.username(m.quoted.sender)
            console.log(name)
            await client.sendMessage(m.from,{text:`Hello ${name}`},{quoted:m})

        }else{
        await client.sendMessage(m.from,{text:`Hello ${pushName}`},{quoted:m})
        }
    }
}