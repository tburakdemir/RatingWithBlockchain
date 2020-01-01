
var StudentModel = require('../models/student');


function getStudents(req, res) {
    StudentModel.find({}, (err, students) => {
        res.send(students)
    })
}

function getStudentWithId(req, res) {


    //  res.json(result);
}


module.exports = {
    getStudents,
    getStudentWithId
}