const router = require("express").Router();

router.get('/', (req, res) => {
    res.json({ name: "Jhon Doe", description: "Lore ipsum Index" })
}) 
  
module.exports = router;