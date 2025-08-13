const Bot = require("../models/bot");

const checkBot = async ({ clientId, req }) => { 
  const search = await req.client.users.fetch(clientId).catch(err => null)
  const bot = await Bot.findOne({ clientId })
  if(search.toJSON().displayAvatarURL !== bot.botObj.displayAvatarURL){
    console.log("El avatar de " + search.toJSON().username + " no es igual que el de la db")
  }
}  

exports.default = checkBot;