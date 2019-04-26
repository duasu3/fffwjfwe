const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.member.voiceChannel) return message.channel.send('I can\'t find u in any voice channel')
    let prefix = "$$";
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    

});
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[-] ${client.users.size}`)
    client.user.setStatus("Online")
});
 

client.login(process.env.BOT_TOKEN);
