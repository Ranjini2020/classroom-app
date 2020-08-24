const mongoose = require('mongoose');
const db = require("../models")
module.exports = {
    create(req, res) {
        db.Course.create(req.body)
        .then((data) => {
            console.log(data);
            return db.Teacher.findOne({_id: req.body.teacher}).then(result=>{
                result.classArray.push(data._id)
                return db.Teacher.findByIdAndUpdate({_id: req.body.teacher}, result)
            })
        }).then(response => {
            //find teacher by id and push course id to teacher's class array.
            return res.status(200).send({ message: 'record added', status: 'success' })
        }).catch((err) => { res.status(200).send({ message: err.message }) })
    },

    update(req, res){
        db.Course.findByIdAndUpdate({_id:req.params.id}, req.body).then((data) => {
            return res.status(200).send({ message: 'record updated', status: 'success' })
        }).catch((err) => res.status(200).send({message: err.message}))
    },
    
    list(req, res) {
        db.Course.find({isdeleted:0})
            .then((data) => {
                res.status(200).send(data)
            })
    },

    listByTeacher(req, res){
        db.Teacher.findById({_id: req.params.id})
            .populate({path: "classArray", match: {isdeleted:false}})
            .then((data) => {
                console.log(data);
                res.status(200).send(data);
            }).catch(err => res.send(err));
    },

    delete(req,res){
        console.log(req.body)
        db.Course.findById(req.body._id)
            .then((data) => {
                data.updateOne({
                    isdeleted:true
                }).then((dataupdate)=>{return res.status(200).send({message:'record deleted successfully'})})
            })

    },
    edit(req,res){
        db.Course.findById(req.params._id)
        .then((data) => {
            console.log(data)
           return res.status(200).send(data)
        })
    },

    coursewithsubject(req,res){
        db.Course.aggregate([
            {
                $match: {  isdeleted: 0 }
            },
            {
                "$lookup": {
                    "from": "mastersubjects",
                    "localField": "_id",
                    "foreignField": "courseid",
                    "as": "subjectdetails"
                }
            },
            {
                $project:{
                    coursename:1,
                    subjectdetails:1

                }
            }
        ]
           
        )
        .then((data) => {
            res.status(200).send(data)
        })
    }
}
    // course view route created by me
    // findById(req,res){
    //     db.Course.findById({_id:req.body.courseID}).then((data)=>{
    //         res.send(data)
    //     })
    // },
    // findById(req, res) {
    //     db.Course.findById({_id:req.body.course})
    //     .then((data) => {
    //         console.log(data);
    //         return db.Student.findOne({_id: req.body.student}).then(result=>{
    //             result.classArray.push(data._id)
    //             // return db.Student.findByIdAndUpdate({_id: req.body.student}, result)
    //         })
    //     }).then(response => {
    //         //find student by id and push course id to student's class array.
    //         return res.status(200).send({ message: 'record added', status: 'success' })
    //     }).catch((err) => { res.status(200).send({ message: err.message }) })
    // },
    
    
