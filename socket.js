

module.exports = function (app) {

    console.log("hello from socket");

    // var server = require('http').Server(app);
    var io = require('socket.io')(app, { origins: '*:*' });

    io.on('connection', function (socket) {
        console.log("hello client");

        io.emit("data", "data")

    });
};