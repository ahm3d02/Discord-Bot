const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');

client.login(fs.readFileSync('.gitignore', 'utf8'));

client.on('ready', () => {
  console.log("Bot is running");
});

client.on('message', msg => {
  if (msg.content == "HiBot") {
    msg.reply("Hi");
  }
});
