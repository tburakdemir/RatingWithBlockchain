const router = require('express').Router();
const studentService = require('../services/student')

router.get("/", studentService.getStudents);

module.exports = router;

