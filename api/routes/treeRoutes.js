// const mongoose = require('mongoose')
const Tree = require('../controllers/treeContoller')

module.exports = function(app) {
    app.get('/trees', Tree.list_of_trees)
}