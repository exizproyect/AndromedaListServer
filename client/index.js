const { Client, Collection, Partials } = require("discord.js");
require("dotenv").config();
const client = new Client({ intents: 3276799,	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]  });

client.on("ready", () => {
  console.log("[ON] > Bot encendido.");
});

client.on("messageCreate", (message) => {
  if(message.content === "vercel?"){
    return message.channel.send("Working!")
  }
})

client.login(process.env.token);

module.exports = client;