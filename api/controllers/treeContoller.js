const multer = require('multer');
const path = require('path')

const Tree = require('../models/treeModel')

exports.list_of_trees = async function(req, res) {
    const trees = await Tree.find({});
    res.json(trees)
}

exports.create_a_tree = async function (req, res) {
    try {
        let new_tree = new Tree({
            ...JSON.parse(req.body.tree),
            PhotoLink: req.file.filename
        });

        await new_tree.save();
        res.status(200).send(new_tree)
    } catch (error) {
        res.status(400).send("Bad request")
    }
};

exports.tree_photo_upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, 'tree_' + Date.now() + path.extname(file.originalname));
        },
    })
});
