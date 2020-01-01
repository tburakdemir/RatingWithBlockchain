const router = require('express').Router();
const authRoute = require('./auth-routes');
const studentRoute = require('./student-routes');
const feedbackRoute = require('./feedback-routes');
const teacherRoute = require('./teacher-routes');


router.use('/auth', authRoute);
router.use('/students', studentRoute)
router.use('/feedbacks', feedbackRoute)
router.use('/teachers', teacherRoute)

module.exports = router;