// Import 3rd party libs
const express = require('express');
const passport = require('passport');
const config = require('config');
const morgan = require('morgan');

// Variables
const PORT = process.env.PORT || config.get('PORT');
const environment = process.env.NODE_ENV || config.get('env');

const app = express();
app.use(morgan('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (environment === 'production') {
  app.use(express.static('client/build/static'));
}

// Add routes, both API and view
require('./server/routes')(app, passport);

// Connect to the Mongo server
const db = require('./server/database').initializeDatabase();

// Start the API server once database is connected
db.on('connected', () => {
  console.log('Mongoose connection established');
  app.listen(config.PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
