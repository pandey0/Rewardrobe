const express = require('express');
const adminauthroute = express.Router();
const {signin,signout,signup} = require('../controller/adminauth.controller.js')

adminauthroute.post('/signup', signup)
adminauthroute.post('/signin', signin)
adminauthroute.get('/signout', signout)

module.exports = adminauthroute;
