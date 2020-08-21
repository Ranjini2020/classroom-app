const mongoose = require('mongoose');

var Schema = new mongoose.Schema({
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
    },
    students: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "student"
        }
      ],
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher"
    }

      

})

module.exports = mongoose.model('MasterCourse', Schema)