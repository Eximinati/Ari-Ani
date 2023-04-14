let fs = require("fs");
const path = require("path");
const axios = require("axios");
const commandsIns = require('../../../installed.json')
const {restart} = require('../../../lib/Function')
const forever = require('forever-monitor');
module.exports = {
    name:"install",
    alias:["i"],
    usage:`${prefa}isntall <raw>`,
    react:"✅",
    desc:"isntall js code plugin",
    category:"Mods",
    start:async(client,m,{text,ban,pushName,mentionByTag,iscreator,args,body,quoted,mime})=>{
        
        try {
            // Install plugin code here...

            if (!text) return m.reply('You did not provide any arguments')
            let url = text;
            if (!url.startsWith("http")) {
                url = `http://${url}`;
            }
            
            url = new URL(text)
            
            if (url.host === 'gist.github.com') url.host = 'gist.githubusercontent.com'
            const res = await axios.get(text)
            .then(async (response) => {
                
                if (commandsIns.includes(url.pathname.split('/')[5].split('.')[0]))
                return m.reply('You have installed it already')
                commandsIns.push(url.pathname.split('/')[5].split('.')[0])
                const folderName = path.resolve(__dirname, '../data')
                const filePath = path.join(folderName, url.pathname.split('/')[5])
                fs.writeFileSync('installed.json', JSON.stringify(commandsIns))
                fs.writeFileSync(filePath, response.data)
                m.reply(
                    `Successfully installed ${url.pathname.split('/')[5]} changes will be available after a restart`
                    )
                    //   await restart()
                })
                // Restart Railway server
                

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
                return m.reply('Invalid URL' + '[Error]:' + error.message)
            }
        },
    };
