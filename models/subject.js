const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var Schema = new mongoose.Schema({
    courseid:{
        type:ObjectId
    },
    subjectname: {
        type: String
    },
    description: {
        type: String
    },
    isdeleted: {
        type: Number,
        default: 0
    }
})
const MasterSubject = new mongoose.model('MasterSubject', Schema)
module.exports = MasterSubject;