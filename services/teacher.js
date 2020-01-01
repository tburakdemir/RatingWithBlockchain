var teacherModel = require('../models/teacher');


function getTeachers(req, res) {
    teacherModel.find({}, (err, teachers) => {
        res.send(teachers)
    })
}

function getTeacherWithId(req, res) {


    //  res.json(result);
}


module.exports = {
    getTeachers,
    getTeacherWithId
}