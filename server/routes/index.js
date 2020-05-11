// Import 3rd party libs
const config = require('config');
const path = require('path');

// Import local libs
// const auth = require('../passport');

// Variables
const environment = config.get('env');

module.exports = function enableRoutes(app, passport) {
  // auth.routes(app, passport); // enable passport later

  // API / non page routes
  app.use('/api', require('./api'));
  app.use('/auth', require('./auth'));

  if (environment === 'production') {
    // Page routes
    app.get('/admin*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/build/index.html')); // Admin app location may change in future
    });

    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    });
  }
}
