
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./api/routes/treeRoutes')
const Tree = require('./api/models/treeModel')
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

mongoose.connect('mongodb://localhost:27017/treesdb')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
routes(app)

app.listen(port, hostname, () => {
    console.log(`Server running ${hostname} on ${port}`)
})
