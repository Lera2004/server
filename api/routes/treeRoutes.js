// const mongoose = require('mongoose')
const Trees = require('../controllers/treeContoller')

module.exports = function(app) {
    app.route('/trees')
        .get(Trees.list_of_trees)
        .post(Trees.create_a_tree);
}