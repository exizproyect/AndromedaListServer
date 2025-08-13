const router = require("express").Router();
const Bot = require("../../models/bot")

router.post('/bot/new', async (req, res) => {
    let { clientId, prefix, summary, support, tags, description, userId } = req.body;
    const bot = await req.client.users.fetch(clientId).catch(err => null)
    if(!bot){
        return res.status(404).json({ message: "Ingresa la id del bot correctamente."})
    }
    if(bot.bot === false){
        return res.status(404).json({ message: "Este cliente es un usuario."})
    }
    if(prefix.length > 10 || summary.length > 191 || support && support.length > 10 || description.length > 16384){
        return res.status(404).json({ message: "Parametros expandidos o eliminados."})
    }
    const user = await req.client.users.fetch(userId).catch(err => null)
    const isDb = await Bot.findOne({ clientId: clientId })
    if(isDb){
        return res.status(404).json({ message: "Este bot se encuentra en la botlist."})
    }
   
    await Bot.create({ clientId, prefix, summary, tags, description, botObj: bot.toJSON(), ownerObj: user.toJSON() })
    res.status(200).json({ message: "Se envio el bot a revision."})
}) 
  
module.exports = router;