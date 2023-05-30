require ('../../../settings')
const {evaluate} = require('mathjs')
module.exports={
    name:"calculator",
    alias:['cal' , 'calc'],
    usage:`${prefa}cal [Your string]`,
    desc:"Gives you the simple calculator ",
    category:"Education",
    react:"📖",
    
    start:async(client,m,{command,prefix,args})=>{

        if (!q) return void M.reply("Provide the value to calculate, Baka!");
    const value = q.trim();
    const calc = evaluate(value);
    const text = `💡 *Solution for ${value} = ${calc}*`;
    await m.reply(text)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error) => 
      m.reply(`${error}`));
  }
}

