// const http = require('http');
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./api/routes/treeRoutes')
const Tree = require('./api/models/treeModel')
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

mongoose.connect('mongodb://localhost:27017/treesdb')

routes(app)

app.listen(port, hostname, () => {
    console.log(`Server running ${hostname} on ${port}`)
})

