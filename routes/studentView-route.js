const express = require('express');
var router = express();


const db = require('../controller');

router.put('/api/subjectdelete', db.Subject.delete);