const Command = require("../../base/Command.js");
const { MessageAttachment } = require('discord.js');

class Achievement extends Command {
  	constructor(client) {
    		super(client, {
			name: "achievement",
			description: "Sends an Minecraft achievement with the text you provided.",
			category: "Random Image",
			usage: "achievement"
    		});
	}

	async run (message, args) {
      		try {
			if (!args[0]) return message.reply('You need to input somthing to make an achievement!');
			message.channel.send(new MessageAttachment('https://www.minecraftskinstealer.com/achievement/a.php?i=20&h=Achievment+Get!&t=' + encodeURIComponent(args.join(' ')), 'mc.png'));  
      		} catch (err) {
			message.channel.send('There was an error!\n' + err).catch();
      		}
    	}
};

module.exports = Achievement;
