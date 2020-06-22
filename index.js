const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');
let prefix = '?';

client.login(process.env.token || fs.readFileSync('token.txt', 'utf8'));

client.once('ready', () => {
  console.log("[SERVER] Bot is running");
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  // console.log(msg.guild.roles);
  // for (let role of msg.guild.roles.cache) {
  //   console.log(role);
  // }
  console.log(`[SERVER] ${msg.author.username}: ${msg.content}`);
  let args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if(command == "hi") {
    msg.channel.send(`Hi <@${msg.author.id}>`);
  //   if (msg.author.id === )
  }
});
