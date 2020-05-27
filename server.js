// Import 3rd party libs
const express = require('express');
const passport = require('passport');
const config = require('config');
const morgan = require('morgan');
const path = require('path');

// Variables
const PORT = process.env.PORT || config.get('PORT');
const environment = process.env.NODE_ENV || config.get('env');
const enableRoutes = require('./server/routes');

const app = express();

app.use(morgan('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (environment === 'production') {
  app.use(
    '/static',
    express.static(path.join(__dirname, './client/build/static'))
  );
}

// Redirect all incoming insecure requests to HTTPS
app.use((req, res, next) => {
  if (req.secure && req.protocol === 'https' && req.connection.encrypted) {
    next();
  } else {
    console.log('Insecure request, redirecting to: ' + req.headers.host + req.url);
    res.redirect('https://' + req.headers.host + req.url);
  }
});

// Add routes, both API and view
enableRoutes(app, passport);

// Connect to the Mongo server
const db = require('./server/database').initializeDatabase();

// Start the API server once database is connected
db.on('connected', () => {
  console.log('Mongoose connection established');
  app.listen(PORT, () => {
    console.log(`🌎  ==> HTTPS API Server now listening on PORT ${PORT}!`);
  });
});
