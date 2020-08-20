const mongoose = require('mongoose');
// var ObjectId = require('mongodb').ObjectID;

const courseSchema = new mongoose.Schema({
    coursename: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    isdeleted: {
        type: Number,
        default: 0
    }
})
// const MasterCourse = new mongoose.model('MasterCourse', Schema)
// module.exports = MasterCourse;
module.exports = mongoose.model ('course',courseSchema)