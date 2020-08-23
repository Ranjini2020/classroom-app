
const express = require('express');
var router = express();


const db = require('../controller');


router.post('/api/tutorials', db.Course.create);
router.get('/api/tutorials', db.Course.list);
router.put('/api/tutorialsdelete', db.Course.delete);
router.get('/api/tutorials/:_id', db.Course.edit);
router.put("/api/tutorials/:id", db.Course.update);
router.get("/api/tutorials/teacher/:id", db.Course.listByTeacher);

// create courseview route by me
// router.get("/api/courseView/:_id",db.View.findById);


module.exports = router;