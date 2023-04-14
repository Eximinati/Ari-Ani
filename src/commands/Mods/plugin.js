module.exports={
    name:"plugin-list",
    alias:["pl" , "list"],
    usage:"=bc message",
    desc:"Broadcast messages to the groups",
    category:"Mods",
    react:"✅",

    start:async(client,m,{command,prefix,text,pushName,participants,args,iscreator,body,quoted,mime})=>{
       
        if(!iscreator) return client.sendMessage(m.from,{text:'*Only mods can use this command*'},{quoted:m})
        
        let image = `https://i.ytimg.com/vi/JaP-IVWZcgY/maxresdefault.jpg`

        if(args[0] === 'economy' || args[0] === 'casino'){
            
            let plugin = 
        `-------------Casino-------------
        \nName: flipCion.js
        \nUsage: Gamble a certain amount of coins on a coin flip
        \nLink: https://gist.githubusercontent.com/Eximinati-V/7760466c08d5924f0c8f2c027991fdce/raw/7d59ce6177ed7f3b4096e6bcb4aafdd0086d5ff9/flipCoin.js
        \nName: beg.js
        \nUsage: Beg for some coins and receive a random amount between 1-100 coins every hour!
        \nLink: https://gist.githubusercontent.com/Eximinati-V/842938a76b493c3f537a1a5d43707f76/raw/7a49fb0ce08037c6d20331dfadfe44ab3efbd360/beg.js
        \nName: reset.js
        \nUsage: Reset user's economy data.
        \nLink: https://gist.github.com/Eximinati-V/842938a76b493c3f537a1a5d43707f76/raw/7a49fb0ce08037c6d20331dfadfe44ab3efbd360/reset.js
        \nName: rollDice.js
        \nUsage: amble a certain amount of coins on a dice roll.
        \nLink: https://gist.github.com/Eximinati-V/842938a76b493c3f537a1a5d43707f76/raw/7a49fb0ce08037c6d20331dfadfe44ab3efbd360/rollDice.js
        \nName: slot.js
        \nUsage: Play the slot machine!
        \nLink: https://gist.github.com/Eximinati-V/842938a76b493c3f537a1a5d43707f76/raw/ce3971ddf86336f9870fad36f3c5d3bf101ecaf1/slot.js`
        
        await client.sendMessage(m.from , {image: {url: image}, caption: plugin} , {quoted:m})
    
    }

    if(args[0] === 'education' || args[0] === 'Education'){

        let plugin =  
        `-------------Education-------------
        \nName: define.js
        \nUsage: Gives you the meaning of your word.
        \nLink: https://gist.github.com/Eximinati-V/916c6818ded68c604027b2b81a1de8f7/raw/b6eee9f41af1cba4d5065396b80e213f2380e9ee/define.js
        \nName: element.js
        \nUsage: Gives you the info of the given element.`
        await client.sendMessage(m.from , {image: {url: image}, caption: plugin} , {quoted:m})
    }

    if(args[0] === 'fun' || args[0] === 'Fun'){

        let plugin =  
        `-------------Fun-------------
        \nName: advice.js
        \nUsage: Gives you random advices.
        \nLink: https://gist.github.com/Eximinati-V/027c935f673fcf25d7fae46009ce7b6e/raw/4bc09a13016e0394f06e576ffe3adda34780ce74/advice.js
        \nName: reaction.js
        \nUsage: Give your reaction gif to react with other users.
        \nLink:https://gist.github.com/Eximinati-V/027c935f673fcf25d7fae46009ce7b6e/raw/4bc09a13016e0394f06e576ffe3adda34780ce74/reactions.js
        \nName: fact.js
        \nUsage: Gives you random facts.
        \nLink: https://gist.github.com/Eximinati-V/027c935f673fcf25d7fae46009ce7b6e/raw/4bc09a13016e0394f06e576ffe3adda34780ce74/fact.js
        \nName: joke.js
        \nUsage: give your spicy random jokes.
        \nLink: https://gist.github.com/Eximinati-V/027c935f673fcf25d7fae46009ce7b6e/raw/4bc09a13016e0394f06e576ffe3adda34780ce74/joke.js`

        await client.sendMessage(m.from , {image: {url: image}, caption: plugin} , {quoted:m})
    }

    if(args[0] === 'Media' || args[0] === 'media'){
        let plugin =
        `-------------Media-------------
        \nName: play.js
        \nUsage: Plays the song.
        \nLink: https://gist.github.com/Eximinati-V/9e589f8aae077d3d49d6a001aed33614/raw/04b4b675630e6e5722f08aac0be0ba07afa00859/play.js
        \nName: playv.js
        \nUsage: Plays the video.
        \nLink: https://gist.github.com/Eximinati-V/9e589f8aae077d3d49d6a001aed33614/raw/04b4b675630e6e5722f08aac0be0ba07afa00859/playv.js
        \nName: ytv.js
        \nUsage: Downloads the video from youtube links
        \nLink: https://gist.github.com/Eximinati-V/9e589f8aae077d3d49d6a001aed33614/raw/04b4b675630e6e5722f08aac0be0ba07afa00859/ytv.js`
        
        await client.sendMessage(m.from , {image: {url: image}, caption: plugin} , {quoted:m})

    }

    let pluginList = `
    1. casino/economy
    2. education
    3. fun
    4. media

     *Usage ${prefix}plugin-list [name] without "[]"*
`
m.reply(pluginList)

        // let plugsin = 
        // `-------------Casino-------------
        // \nName: 
        // \nUsage: 
        // \nLink: 
        // \nName: 
        // \nUsage: 
        // \nLink: 
        // \nName: 
        // \nUsage: 
        // \nLink: 
        // \nName: 
        // \nUsage: 
        // \nLink: 
        // \nName: 
        // \nUsage: 
        // \nLink: `

        // // m.reply(plugin)

    }
}