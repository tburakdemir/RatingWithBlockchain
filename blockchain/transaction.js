class Transaction {
    constructor(sender, receiver, message) {
        this.sender = sender;
        this.receiver = receiver;
        this.message = message;
        this.timestamp = Date.now();
    }


    /* Stringfying and Parser functions */
}

module.exports = Transaction;