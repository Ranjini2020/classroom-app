const mongoose = require('mongoose');
const MasterSubject = mongoose.model('MasterSubject');
module.exports = {
    insertupdate(req, res) {
        MasterSubject.create({
            subjectname: req.body.subjectname,
            description: req.body.description,
            courseid:req.body.courseid
        }).then((data) => {
            return res.status(200).send({ message: 'record added success', status: 'success' })
        }).catch((err) => { res.status(200).send({ message: err.message }) })
    },
    list(req, res) {
        console.log(req.params._id)
        MasterSubject.find({isdeleted:0,courseid:req.params._id})
            .then((data) => {
                res.status(200).send(data)
            })
    },
    delete(req,res){
        MasterSubject.findById(req.body._id)
            .then((data) => {
                data.updateOne({
                    isdeleted:1
                }).then((dataupdate)=>{return res.status(200).send({message:'record deleted successfully'})})
            })
    },
    edit(req,res){
        MasterSubject.findById(req.params._id)
        .then((data) => {
            console.log(data)
           return res.status(200).send(data)
        })
    }
    
}