const router = require('express').Router();
const passport = require('../config/express-config').passport;
const CryptoJS = require("crypto-js");


router.get('/account', ensureAuthenticated, function (req, res) {
  // res.render('account', { user: req.user });
});


router.get('/outlook',
  passport.authenticate('windowslive', {
    scope: [
      'openid',
      'profile',
      'offline_access',
      'https://outlook.office.com/Mail.Read'
    ]
  }),
  function (req, res) {
    // The request will be redirected to Outlook for authentication, so
    // this function will not be called.
  });

router.get('/outlook/callback',
  passport.authenticate('windowslive', { failureRedirect: '/login' }),
  function (req, res) {
    console.log("hello user");
    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(req.user._json), "Secret Passphrase");
    console.log(encrypted.toString());
    // var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), "Secret Passphrase");
    //console.log(decrypted.toString(CryptoJS.enc.Utf8));
    res.redirect(`http://192.168.1.194:3000/profile/?code=${new Buffer(encrypted.toString()).toString('base64')}`);
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('http://192.168.1.194:3000');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}


router.get('/login', (req, res) => {
  console.log("login")
  res.send("login");
})


module.exports = router;