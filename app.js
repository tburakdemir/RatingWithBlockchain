var express = require('express');
var app = express();


require('dotenv').config();
require("./config/express-config")(app);
require('./db');

const apiRoute = require('./routes/api');
app.use('/api', apiRoute);


app.get('/', (req, res) => {
  console.log("ssss")
  res.end('It worked!');
})


const port = process.env.PORT || 5001;
const server = app.listen(port, () => console.log(`Listenin on port: ${port}`));
require('./socket')(server)


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}


