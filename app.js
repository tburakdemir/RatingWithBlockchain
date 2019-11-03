var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();
require('./db');
const port = process.env.SERVER_PORT;


var FeedbackModel = require('./models/feedback');
var StudentModel = require('./models/student');
var TeacherModel = require('./models/teacher');


app.post('/', (req, res, ) => {
    console.log(req.body);
    res.send(req.body)
})

app.post('/sendFeedback', (req, res) => {
    console.log(req.query.user);
    console.log(req.query.date);
    let doc = new FeedbackModel()
})


app.post('/newStudent', (req, res) => {
    let doc = new StudentModel(req.body);
    doc.save()
        .then(() => res.send("Success"))
        .catch(() => res.send('Error'));

})

app.get('/students', (req, res) => {
    StudentModel.find({}, (err, students) => {
        res.send(students)
    })
})

app.get('/teachers', (req, res) => {
    TeacherModel.find({}, (err, teachers) => {
        res.send(teachers)
    })
})

app.post('/newTeacher', (req, res) => {
    let doc = new TeacherModel(req.body);
    doc.save()
        .then(() => res.send('Success'))
        .catch(() => res.send('Error'));
})


// Always Last Route
app.get('*', function (req, res) {
    res.status(404).send('404 Page');
});


app.listen(port, () => console.log(`Listenin on port: ${port}`));