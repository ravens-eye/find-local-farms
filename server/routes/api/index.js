// Import libs
const express = require('express');
// const roles = require('../../roles');
const routes = express.Router();

routes.use('/business', require('./businesses'));

module.exports = routes;