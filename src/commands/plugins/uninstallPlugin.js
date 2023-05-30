let fs = require("fs");
const path = require("path");
const axios = require("axios");
const commandsIns = require('../../../installed.json');
const {restart} = require('../../lib/Function')
module.exports = {
    name:"uninstall",
    alias:["unistal"],
    usage:`${prefa}isntall <raw>`,
    react:"✅",
    desc:"isntall js code plugin",
    category:"Mods",
    start:async(client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime})=>{
        try {
            if (!text) return m.reply('You did not provide any arguments')
            if (!commandsIns.includes(text)) return m.reply('You did not install the plugin')
            const folderName = path.resolve(__dirname, '../data')
            const filePath = path.join(folderName, text + '.js')
            fs.unlinkSync(filePath)
            const index = commandsIns.indexOf(text)
            commandsIns.splice(index, 1)
            fs.writeFileSync('installed.json', JSON.stringify(commandsIns))
            m.reply(`Successfully uninstalled ${text + '.js'} changes will be available after a restart`)
        //    await restart()

        const child = new (forever.Monitor)('.../heart.js', {
            max: 1,
            silent: true,
            args: []
        });

        child.on('exit', function() {
            console.log('Restarting the server...')
            child.start();
        });

        console.log('Starting the server...');
        child.start();
    
    } catch (error) {
        // Handle errors
        return m.reply('Invalid URL' + '[Error]:' + eror.message)
    }
        },
        }
    
