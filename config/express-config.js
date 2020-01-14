const cors = require("cors");
var bodyParser = require("body-parser");
const passport = require("passport");
const OutlookStrategy = require("passport-outlook").Strategy;
var OUTLOOK_CLIENT_ID = "d3f787f8-fd4c-465e-92e5-da953918734a";
var OUTLOOK_CLIENT_SECRET = "/GD_6QyP1YjvhUpA0sw@QqKRhLl]Tcj2";


module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors({
        credentials: true
    }));
    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

    app.use(passport.initialize());
    app.use(passport.session());
    // Use the OutlookStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and Outlook
    //   profile), and invoke a callback with a user object.
    passport.use(new OutlookStrategy({
        clientID: OUTLOOK_CLIENT_ID,
        clientSecret: OUTLOOK_CLIENT_SECRET,
        callbackURL: "http://192.168.1.194:5000/api/auth/outlook/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            console.log("profile");
            console.log(profile);
            process.nextTick(function () {

                // To keep the example simple, the user's Outlook profile is returned
                // to represent the logged-in user.  In a typical application, you would
                // want to associate the Outlook account with a user record in your
                // database, and return that user instead.
                return done(null, profile);
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        console.log(user);
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
};

module.exports.passport = passport;