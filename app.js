var express = require('express');
var app = express();

require('dotenv').config();
require("./config/express-config")(app);
require('./db');
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listenin on port: ${port}`));