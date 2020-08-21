const mongoose = require('mongoose');
const db = require("../models")
module.exports = {
    insertupdate(req, res) {
        if(!req.body._id)
        {
            db.Course.create(req.body).then((data) => {
                return res.status(200).send({ message: 'record added', status: 'success' })
            }).catch((err) => { res.status(200).send({ message: err.message }) })
        }
        else{
            db.Course.findById(req.body._id)
            .then((data) => {// data.update does not work
                data.updateOne({
                    coursename: req.body.coursename,
                    description: req.body.description,
                    category:req.body.category
                }).then((dataupdate)=>{return res.status(200).send({message:'record Updated successfully'})})
            })
        }
      
    },
    
    list(req, res) {
        db.Course.find({isdeleted:0})
            .then((data) => {
                res.status(200).send(data)
            })
    },

    delete(req,res){
        console.log(req.body)
        db.Course.findById(req.body._id)
            .then((data) => {
                data.updateOne({
                    isdeleted:1
                }).then((dataupdate)=>{return res.status(200).send({message:'record deleted successfully'})})
            })

    },
    edit(req,res){
        db.Course.findById(req.params._id)
        .then((data) => {
            console.log(data)
           return res.status(200).send(data)
        })
    }
}