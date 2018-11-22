const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("498233231922036756")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 client.on('message', message => {
    let prefix = 'v1';
   if(message.content.startsWith('v1say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});
client.login('NTE1MjAwMjI2NTU5MDAwNTg2.Dthp8A.GZF41cPoJNfUEmuD87VbE7BDB4Y');