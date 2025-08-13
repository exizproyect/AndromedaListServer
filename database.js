const mongoose = require('mongoose');
let url = ""
mongoose.connect(url).then(() => {
 console.log("[ON] > Base de datos conectado")
}).catch((err) => {
  console.log(err)
})
