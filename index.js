//console.log("Hello NPM")
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "/"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else{
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    switch(args[0])
    {
        case 'hello':
            msg.channel.send("hello");
            break;
        case 'avatar':
            msg.reply(msg.author.displayAvatarURL());
            break;
        case 'clear':
            if (!args[1]){
                return msg.reply("Error")
            }else{
                msg.channel.bulkDelete(args[1]);
                break;
            }
    }

  }

  

});



client.login('ODM5OTEzMTE3MzM3Mzg3MDIw.YJQkDA.ep7vnpaODv0fAo0iFNFUYFYHXps');