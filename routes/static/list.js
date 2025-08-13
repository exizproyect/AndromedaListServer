const router = require("express").Router();
const Bot = require("../../models/bot")

router.get('/bot/list', async (req, res) => {
    let bots = await Bot.find().sort({ voteCount: -1 })

    const filteredBots = bots.map(bot => ({
        id: bot.clientId,
        name: bot.botObj.username,
        avatar: bot?.botObj.displayAvatarURL,
        votes: bot?.voteCount,
        tags: bot?.tags,
        summary: bot?.summary
      }));
    
    res.status(200).json(filteredBots)
}) 
  
module.exports = router;