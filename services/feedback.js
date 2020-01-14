var FeedbackModel = require('../models/feedback');
var BlockchainModel = require('../models/blockchain');

var addBlock = require('../blockchain/blockchain').addBlock;


function getFeedbacks(req, res) {

    let filter = {};
    if (req.query.teacher)
        filter = { postedTo: req.query.teacher }

    FeedbackModel.find(filter, (err, feedbacks) => {
        res.send(feedbacks)
    })
}

function getFeedbackWithId(req, res) {
    //  res.json(result);
}


function postFeedback(req, res) {

    console.log("post SendFeedback")
    console.log(req.user)

    BlockchainModel.find({})
        .then(arr => {
            console.log("first chain");
            //console.log(arr[0].chain);

            chain = addBlock(arr[0].chain,
                {
                    postedBy: req.body.feedback.postedBy,
                    postedTo: req.body.feedback.postedTo,
                    message: req.body.feedback.message,
                    createdAt: Date.now().toString()
                })
            console.log("last chain");

            //console.log(chain);
            BlockchainModel.findOneAndUpdate({ org: false }, { chain: chain }).then(d => console.log(d))

            console.log("doc")

        })



    console.log(22);


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