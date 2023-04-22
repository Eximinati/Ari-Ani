const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "923265825610,923087880256";
}

let owners = gg.split(",");
global.owner = owners.map(owner => owner + '@s.whatsapp.net');
global.mongodb = process.env.MONGO_URI || "mongodb+srv://Ali:ariani@testicles.vzog1fk.mongodb.net/?retryWrites=true&w=majority";
global.prefa = process.env.PREFIX || "/";
// global.ggle = process.env.GOOGLE_API || "none";
// global.wter = process.env.WEATHER_API || "none";
global.sessionId = process.env.SESSION_ID || "Ari";
global.malid = process.env.MAL_USERNAME || "Aku_sempai";
global.malpass = process.env.MAL_PASSWORD || "Larsnoctis7";
global.port = process.env.PORT || 8080;
global.packname = process.env.PACKNAME || "Ari Ani"

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});


//Everything written here is not copy righted. You can use as your need.
