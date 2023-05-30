const TD = require('better-tord')
module.exports={
    name:"truth_dare",
    alias:["td"],
    usage:"td",
    desc:"truth_dare",
    category:"Fun",
    react:"✅",

    start:async(client,m,{command,prefix,text,pushName,participants,args,iscreator,body,quoted,mime})=>{
        if (!args) return m.reply('Sorry you did not give any search term!')
        const Available = ['truth', 'dare']
        if (!Available.includes(args.trim()))
            return m.reply(`Please provide a valid terms\n\n*Available:* \n${Available.join('\n')}`)
        m.reply(args == 'truth' ? await TD.get_truth() : await TD.get_dare())
    }
}