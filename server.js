const mongoose = require('mongoose')
const express = require('express')
const routes = require('./api/routes/treeRoutes')
const hostname = '10.0.0.104';
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
app.use('/uploads', express.static('uploads/'))
app.listen(port, hostname, () => {
    console.log(`Server running ${hostname} on ${port}`)
})