module.exports = {
    name: "faq",
    alias: ["FAQ", "Faq"],
    usage: `${prefa}faq`,
    react: "✅",
    desc: "Displays frequently asked questions",
    category: "General",
    start: async (client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime,prefix}) => {


        const n = [
            'https://telegra.ph/file/17b41e81f52736e6cf50f.mp4'
        ]
        
        let rin = n[Math.floor(Math.random() * n.length)]

        const txt =  `        *━━━❰ FAQ ❱━━━*
📮 *Q1:* How do I add ${process.env.NAME} bot in my group?
📑 *A:* Send the group link in the bot's or owner's DM &  it will join.
ᚖ ────── ✪ ────── ᚖ
📮 *Q2:* What are the requirements for the bot to join a group?
📑 *A:* First the group must have atleast 30 members for the bot to join & the group must be active group.
ᚖ ────── ✪ ────── ᚖ
📮 *Q3:* How do I earn XP in the group?
📑 *A:* By earning XP you will need to use commands of the bot like reaction command & others.
ᚖ ────── ✪ ────── ᚖ
📮 *Q4:* Can the bot work in personal message?
📑 *A:* No, the bot will not work in personal message! So you're recommended to use the bot in groups only or you will be bocked and banned.
ᚖ ────── ✪ ────── ᚖ
📮 *Q5:* Can I call the bot?
📑 *A:* Calling the bot is at your own pleasure but with consequences thus you will be blocked instantly for calling the bot!
ᚖ ────── ✪ ────── ᚖ
📮 *Q6:* Where can I find ${process.env.NAME}  bot?
📑 *A:* ${process.env.NAME}  is one of the bots owned by *Eximinati*. Bot base is available on github.
ᚖ ────── ✪ ────── ᚖ
📮 *Q7:* Do i have to pay to isntall plugins?*
📑 *A:* The bot owner can use "list" command to see listed plugins and install them for free.
ᚖ ────── ✪ ────── ᚖ
📮 *Q8:* Why is the bot not working in my group?
📑 *A:* There are two main reasons for that, either the bot is lagging due to data traffic or the bot is inactive.
ᚖ ────── ✪ ────── ᚖ
📮 *Q9:* Can l buy the bot?
📑 *A:* This Bot repo is Private at the moment but bots are not going for sale they are available in github.com public and private repos.
ᚖ ────── ✪ ────── ᚖ`
client.sendMessage(m.from, {video: {url: rin}, gifPlayback: true, caption:txt }, {quoted:m}
)
}
}
