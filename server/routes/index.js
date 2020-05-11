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

    // To enable SSL with certbot
    app.get('/.well-known/acme-challenge/THXm3zx-_1grMQEOAxObDyjdzFiHsQSYf79XbcPVr2k', (req, res) => {
      res.send('THXm3zx-_1grMQEOAxObDyjdzFiHsQSYf79XbcPVr2k.x4RfPYOsRMR7-Ltc6xeIBJWscKCFlk3U1neOM0efGM0');
    })

    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    });
  }
}
