const express = require('express')
require("dotenv").config;
const app = express()
const port = process.env.PORT || 8080;
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const client = require("./client/index")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use((req, res, next) => {
    req.client = client;
    res.locals.client = client;
    next();
})

const routesDirectory = path.join(__dirname, 'routes');

const loadRoutes = (directory) => {
    fs.readdirSync(directory).forEach((file) => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            loadRoutes(filePath);
            return;
        }
        if (file.endsWith('.js')) {
            const route = require(filePath);
            app.use('/', route);
        }
    });
};
loadRoutes(routesDirectory);

require("./client/index")
require("./database")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
