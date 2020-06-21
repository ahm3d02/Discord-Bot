const discord = require("discord.js");
const client = new discord.Client();

client.login("NzI0MDg5OTczNzgyODcyMTM0.Xu-Cyg.CTeUsdxW4nj1AJfhabvGVCRkd_0");

client.on('ready', () => {
  console.log("Bot is running");
});

client.on('message', msg => {
  if (msg.content == "HiBot") {
    msg.reply("Hi");
  }
});
