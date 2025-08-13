const router = require("express").Router();
const Bot = require("../../models/bot")

router.get('/bot/view/:id', async (req, res) => {
    const bot = await Bot.findOne({ clientId: req.params.id })
    if(!bot){
        return res.status(404).json({ message: "Not found" })
    }
    const filtered = {
        name: bot.botObj.username,
        id: bot.clientId,
        summary: bot.summary,
        description: bot.description,
        tags: bot.tags,
        prefix: bot.prefix,
        owner: {
            name: bot?.ownerObj.username,
            id: bot?.ownerObj.id,
            avatar: bot?.ownerObj.displayAvatarURL
        },
        bot: {
           avatar: bot?.botObj.displayAvatarURL
        },
        voteCount: bot.voteCount
    }
    res.status(200).json(filtered)
}) 
  
module.exports = router;