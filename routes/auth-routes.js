const router = require('express').Router();
const passport = require('passport')


router.get('/login', (req, res) => {
    console.log("login")
    res.send("login");
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}, () => console.log("sss")))

router.get('/logout', (req, res) => {
    res.send("log out.")
})

module.exports = router;