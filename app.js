var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())

require('dotenv').config();
require('./db');
const port = process.env.PORT;


var FeedbackModel = require('./models/feedback');
var StudentModel = require('./models/student');
var TeacherModel = require('./models/teacher');


app.post('/', (req, res, ) => {
    console.log(req.body);
    res.send(req.body)
})


/* Example
{
	"message": "Perfect!!",
	"likes": 5,
	"dislikes": 0,
	"postedTo": "Ali Demir"
}
*/
app.post('/sendFeedback', async (req, res) => {
    let student = await StudentModel.findOne({ fullName: req.query.postedBy });
    let teacher = await TeacherModel.findOne({ fullName: req.body.postedTo });
    if (student && teacher) {
        req.body.postedBy = student._id;
        req.body.postedTo = teacher._id;
        let doc = new FeedbackModel(req.body)
        doc.save()
            .then(() => res.send("Success"))
            .catch((err) => res.send('Error' + err));

        console.log(student._id)
    }


})

/** Example
{
    "fullName": "Burak Demir"
}
 */
app.post('/newStudent', (req, res) => {
    let doc = new StudentModel(req.body);
    doc.save()
        .then(() => res.send("Success"))
        .catch(() => res.send('Error'));

})

/**
{
	"fullName": "Ali Demir",
	"lectures": [
			"CSE 5000",
			"CSE 5001",
			"CSE 1000"
		]
}
 */
app.post('/newTeacher', (req, res) => {
    let doc = new TeacherModel(req.body);
    doc.save()
        .then(() => res.send('Success'))
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


// Always Last Route
// app.get('*', function (req, res) {
//     res.status(404).send('404 Page');
// });


app.listen(port, () => console.log(`Listenin on port: ${port}`));