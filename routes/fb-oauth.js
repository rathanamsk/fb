const express = require('express');
const router = express.Router()
require('../common/fb-oauth-config')
const passport = require('passport')


router.get('/fb',passport.authenticate('facebook',{scope:['email']}))

router.get('/callback',
    passport.authenticate('facebook', { failureRedirect: '/', failureMessage: true }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router