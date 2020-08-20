const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var Schema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isdeleted: {
        type: Number,
        default: 0
    }
})
const Profile = new mongoose.model('Profile', Schema)
module.exports = Profile;