// Import 3rd party libs
const express = require('express');
const passport = require('passport');
const config = require('config');
const morgan = require('morgan');
const path = require('path');
// const fs = require('fs');
// const https = require('https');

// Variables
const PORT = process.env.PORT || config.get('PORT');
const environment = process.env.NODE_ENV || config.get('env');
const enableRoutes = require('./server/routes');

const app = express();

// Certificate
// const privateKey = fs.readFileSync('./certs/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('./certs/cert.pem', 'utf8');
// const ca = fs.readFileSync('./certs/chain.pem', 'utf8');
// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };

app.use(morgan('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (environment === 'production') {
  app.use('/static', express.static(path.join(__dirname, './client/build/static')));
}

// Add routes, both API and view
enableRoutes(app, passport);

// Connect to the Mongo server
const db = require('./server/database').initializeDatabase();

// const httpsServer = https.createServer(credentials, app);

// Start the API server once database is connected
db.on('connected', () => {
  console.log('Mongoose connection established');
  app.listen(PORT, () => {
    console.log(`🌎  ==> HTTPS API Server now listening on PORT ${PORT}!`);
  })
});
