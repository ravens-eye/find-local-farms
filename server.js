// Import 3rd party libs
const express = require('express');
const passport = require('passport');
const config = require('config');
const mongoose = require('mongoose');

// Variables
const PORT = process.env.PORT || config.get('PORT');
const environment = process.env.NODE_ENV || config.get('env');
const MongoURI = process.env.MONGODB_URI || config.get('mongoUri');

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (environment === 'production') {
  app.use(express.static('client/build/static'));
}

// Add routes, both API and view

require('./server/routes')(app, passport);

// Connect to the Mongo DB
mongoose.connect(MongoURI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

