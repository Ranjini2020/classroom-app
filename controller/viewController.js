const mongoose = require('mongoose');
const db = require("../models")
module.exports = {

    // findById(req,res){
    //     db.Student.findById(req.params._id)
    //     .populate("course")
    //     then(dbCourse => {
    //         res.json(dbCourse);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    // },

    
    findById(req, res) {
            db.Course.findById({_id:req.body.course})
            .then((data) => {
                console.log(data);
                return db.Student.findOne({_id: req.body.student}).then(result=>{
                    result.classArray.push(data._id)
                    // return db.Student.findByIdAndUpdate({_id: req.body.student}, result)
                })
            }).then(response => {
                //find student by id and push course id to student's class array.
                return res.status(200).send({ message: 'record added', status: 'success' })
            }).catch((err) => { res.status(200).send({ message: err.message }) })
        },

   

    
    
   
}
