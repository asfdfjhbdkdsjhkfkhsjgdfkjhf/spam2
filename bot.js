

const Discord = require("discord.js");//@Flasteni
const falsteni = new Discord.Client();//@Flasteni
var prefix = "!"
falsteni.on('message', message => {//@Flasteni
  if (!message.content.startsWith(prefix)) return;//@Flasteni
  var args = message.content.split(' ').slice(1);//@Flasteni
  var argresult = args.join(' ');//@Flasteni
  if (message.author.id !== "497449510495059978") return;//@Flasteni

//@Flasteni
  if (message.content.startsWith('!spam')) { //@Flasteni
          let count = 0;//@Flasteni
          let ecount = 0;//@Flasteni
          for(let x = 0; x < 90000; x++) {//@Flasteni
            message.channel.send(`${argresult}`)//@Flasteni
              .then(m => {//@Flasteni
                count++;//@Flasteni
              })//@Flasteni
              //@Flasteni//@Flasteni
            }//@Flasteni
          }//@Flasteni
    });//@Flasteni
	
	
	
falsteni.login('NTE1MjAwMjI2NTU5MDAwNTg2.Dthp8A.GZF41cPoJNfUEmuD87VbE7BDB4Y');
