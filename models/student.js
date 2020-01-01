let mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    fullName: { type: String, unique: true },
    avatar: String,
    createdAt: Date,
});

studentSchema.pre("save", function (next) {
    let now = Date.now().toString();
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
        this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
});
module.exports = mongoose.model("Student", studentSchema);