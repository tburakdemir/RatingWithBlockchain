const router = require('express').Router();
const feedbackService = require("../services/feedback");


router.get("/", feedbackService.getFeedbacks)

router.post("/", feedbackService.postFeedback)

router.put("/", feedbackService.updateFeedback)

module.exports = router