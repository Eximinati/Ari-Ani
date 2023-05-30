require ('../../../settings')
module.exports={
    name:"leave",
    alias:["leavegroup"],
    usage:`${prefa}leave`,
    react:"✅",
    desc:"leave",
    category:"Mods",
    start:async(client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime})=>{
    if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
    client.groupLeave(m.from).catch((res) => m.reply('Something went wrong please check the link'))
    
    }
}