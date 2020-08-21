const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  classArray:[
    {
      type: Schema.Types.ObjectId,
      ref: "MasterCourse"
    }
  ]
});


module.exports = mongoose.model("teacher", teacherSchema);