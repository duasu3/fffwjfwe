const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("Nothing To Say..","https://www.twitch.tv/idk");
});

var PrEfix = "f";

client.on('message', message => {

  if (!message.content.startsWith(PrEfix)) return;

  var args = message.content.split(' ').slice(1);

  var argresult = args.join(' ');

  if (message.author.id !== '555361958036242448') return;

if (message.content.startsWith(PrEfix + 'wt')) {

client.user.setActivity(argresult, {type:'WATCHING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'ls')) {

client.user.setActivity(argresult, {type:'LISTENING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'st')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else
  
  
  if (message.content.startsWith(PrEfix + 'pl')) {

  client.user.setGame(argresult);

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

}

});
