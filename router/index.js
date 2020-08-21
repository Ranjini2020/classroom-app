
const express = require('express');
var router = express();


const db = require('../controller');


router.post('/api/tutorials', db.Course.insertupdate);
router.get('/api/tutorials', db.Course.list);
router.put('/api/tutorialsdelete', db.Course.delete);
router.get('/api/tutorials/:_id', db.Course.edit);


module.exports = router;