const router = require('express').Router();
const teacherService = require('../services/teacher');


router.get("/", teacherService.getTeachers)

module.exports = router