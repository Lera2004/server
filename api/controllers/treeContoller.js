
const mongoose = require('mongoose')
const Tree = require('../models/treeModel')

exports.list_of_trees = async function(req, res) {
    const trees = await Tree.find({});
    res.json(trees)
}