let fs = require("fs");
const path = require("path");
const axios = require("axios");
const commandsIns = require('../../../installed.json')
module.exports = {
    name:"plugin",
    alias:["availPlugin"],
    usage:`${prefa}isntall <raw>`,
    react:"✅",
    desc:"isntall js code plugin",
    category:"Mods",
    start:async(client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime})=>{
        if (commandsIns.length === 0) {
            return m.reply("No plugins installed");
        }
        text = '===== *PLUGINS* =====\n'
        commandsIns.forEach((element, index) => {
            text += `${index + 1}| ${element}\n`
        })
        return m.reply(text)
        
    }
}