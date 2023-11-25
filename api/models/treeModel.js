const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TreeSchema = new Schema({
    "UserID": {
        type: Number,
    },
    "First_Name": {
        type: String,
    },
    "Last_Name": {
        type: String,
    },
    "Username": {
        type: String,
    },
    "Tree_Name": {
        type: String,
    },
    "Tree_State": {
        type: String,
    },
    "PhotoLink": {
        type: String,
    },
    "Location": {
        type: String,
    },
    "Latitude": {
        type: Number,
    },
    "Longitude": {
        type: Number,
    },
})

module.exports = mongoose.model("Trees", TreeSchema)