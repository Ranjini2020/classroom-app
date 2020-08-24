const mongoose = require('mongoose');
const db = require("../models")
module.exports = {

    findById(req,res){
        db.Student.findById(req.params._id)
        .populate("course")
        then(dbCourse => {
            res.json(dbCourse);
          })
          .catch(err => {
            res.json(err);
          });
    },

    // list(req, res) {
    //     db.Course.find({isdeleted:0})
    //         .then((data) => {
    //             res.status(200).send(data)
    //         })
    // },

    // listByTeacher(req, res){
    //     db.Teacher.findById({_id: req.params.id})
    //         .populate({path: "classArray", match: {isdeleted:false}})
    //         .then((data) => {
    //             console.log(data);
    //             res.status(200).send(data);
    //         }).catch(err => res.send(err));
    // },

    
    
   
}
