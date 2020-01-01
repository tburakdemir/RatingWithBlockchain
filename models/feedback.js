let mongoose = require("mongoose");


let feedbackSchema = new mongoose.Schema({
    postedBy: String,
    postedTo: String,
    avatar: String,
    message: String,
    likes: Number,
    dislikes: Number,
    createdAt: Date,
});

feedbackSchema.pre("save", function (next) {
    let now = Date.now().toString();
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
        this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
});
module.exports = mongoose.model("Feedback", feedbackSchema);