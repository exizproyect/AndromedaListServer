const mongoose = require('mongoose');
let url = "mongodb+srv://existenzdev:existenzdev@cluster0.isvq3rw.mongodb.net/l?retryWrites=true&w=majority"
mongoose.connect(url).then(() => {
 console.log("[ON] > Base de datos conectado")
}).catch((err) => {
  console.log(err)
})
