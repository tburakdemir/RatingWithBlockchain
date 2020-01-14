let mongoose = require("mongoose");


let blockchainSchema = new mongoose.Schema({
    chain: Object,
    createdAt: Date,
    org: Boolean
});

blockchainSchema.pre("save", function (next) {
    let now = Date.now().toString();
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
        this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
});
module.exports = mongoose.model("Blockchain", blockchainSchema);