const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');

client.login(process.env.token || fs.readFileSync('token.txt', 'utf8'));

client.on('ready', () => {
  console.log("Bot is running");
});

client.on('message', msg => {
  if (msg.content == "HiBot") {
    msg.reply("Hi");
  }
});
