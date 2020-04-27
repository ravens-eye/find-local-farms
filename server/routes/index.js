// Import 3rd party libs
const config = require('config');

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
    app.route('/admin*').get(function adminPage(req, res) {
      res.sendFile('client/build/index.html'); // Admin app location may change in future
    });

    app.route('/*').get(function mainApp(req, res) {
      res.sendFile('client/build/index.html');
    });
  }
}