
const mongoose = require('mongoose')
const Tree = require('../models/treeModel')

exports.list_of_trees = async function(req, res) {
    const trees = await Tree.find({});
    res.json(trees)
}

exports.create_a_tree = async function (req, res) {
    try {
        let new_tree = new Tree(req.body);
        await new_tree.save();
        res.status(200).send(new_tree)
    } catch (error) {
        res.status(400).send("Bad request")
    }
};