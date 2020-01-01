var FeedbackModel = require('../models/feedback');


function getFeedbacks(req, res) {
    FeedbackModel.find({}, (err, feedbacks) => {
        res.send(feedbacks)
    })
}

function getFeedbackWithId(req, res) {


    //  res.json(result);
}


function postFeedback(req, res) {

    console.log("post SendFeedback")
    console.log(req.body)

    let doc = new FeedbackModel(req.body.feedback)
    doc.save()
        .then(() => res.status(200).send("Success"))
        .catch((err) => res.status(500).send('Error' + err));


}

function updateFeedback(req, res) {

}


module.exports = {
    getFeedbacks,
    getFeedbackWithId,
    postFeedback,
    updateFeedback
}