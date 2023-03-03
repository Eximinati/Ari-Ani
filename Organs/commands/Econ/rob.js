const Player = require("../../../models/economic");

module.exports = {
  name: 'rob',
  alias: ['rob'],
  desc: 'Attempt to rob another player.',
  category: 'Economy',
  react: '🏃‍♂️',
  usage: '/rob <user>',
  start: async (client, m, mentionByTag ,args) => {
    
    //   const mention= mentionByTag
    // const target = await (mention[0]) 
    const player = await Player.findOne({ userId: m.sender });

    
    const target = await mentionByTag[0]
    if (!player) {
      m.reply('You are not a player in the game.');
      return;
    }
    if (target === m.sender) {
      m.reply('You cannot rob yourself.');
      return;
    }

    const victim = await Player.findOne({ userId: target });
    console.log(victim)

    if (!victim) {
      m.reply('The target is not a player in the game.');
      return;
    }

    let successRate = Math.random();
    if (victim.protected === 'low') {
      successRate *= 0.8;
      protectionType = 'low';
    } else if (victim.protected === 'mid') {
      successRate *= 0.6;
      protectionType = 'mid';
    } else if (victim.protected === 'high') {
      successRate *= 0.4;
      protectionType = 'high';
    }

    const stealAmount = 0.5;
    const fineAmount = 1000;
    const randomNumber = Math.random();

    if (randomNumber < successRate) {
      const stolenAmount = Math.floor(victim.wallet * stealAmount);

      victim.wallet -= stolenAmount;
      player.wallet += stolenAmount;

      await victim.save();
      await player.save();

      m.reply(`You successfully robbed ${target} @${target.split("@")[0]} nd stole ${stolenAmount} gold from their wallet!`)

    } else {
      m.reply(`Your robbery attempt failed. You were caught by the authorities and had to pay a fine of ${fineAmount} gold.`);
      player.wallet -= fineAmount;
      await player.save();
    }
    
  }
}
