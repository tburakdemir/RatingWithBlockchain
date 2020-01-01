const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const credentials = require('./credentials')


passport.use(new GoogleStrategy({
    callbackURL: credentials.google.web.redirect_uris,
    clientID: credentials.google.web.client_id,
    clientSecret: credentials.google.web.client_secret
}, (err, s) => {

}))
