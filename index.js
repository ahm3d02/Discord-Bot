const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');
let prefix = '?';

client.login(process.env.token || fs.readFileSync('token.txt', 'utf8'));

client.once('ready', () => {
  console.log("[SERVER] Bot is running");
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === "clutch") {
    if (!msg.member.voiceChannel) {
      msg.channel.send("You must be in a voice channel");
      return;
    }
  }
  else if (!msg.content.startsWith(prefix) || msg.author.bot) return;
});
