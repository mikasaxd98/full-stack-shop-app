const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/auth');

/*//localhost:3000/api/auth/login exemple
router.post('/login',passport.authenticate('jwt', {session: false}), controller.login);*/

//localhost:3000/api/auth/login
router.post('/login', controller.login);

//localhost:3000/api/auth/register
router.post('/register', controller.reqister);


module.exports = router;
