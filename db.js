const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose
            .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/test?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
            .then(() => {
                console.log("Database connection successful");
            })
            .catch((err) => {
                console.error("Database connection error: " + err);
            });
    }
}


module.exports = new Database();


