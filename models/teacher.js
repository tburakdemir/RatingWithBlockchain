let mongoose = require("mongoose");

let teacherSchema = new mongoose.Schema({
    fullName: { type: String, unique: true },
    lectures: Array,
    createdAt: Date,
});

teacherSchema.pre("save", function (next) {
    let now = Date.now().toString();
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
        this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
});
module.exports = mongoose.model("Teacher", teacherSchema);