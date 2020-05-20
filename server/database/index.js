/* Mongo Database
 * - this is where we set up our connection to the mongo database
 */

const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const MONGODB_URI = process.env.MONGODB_URI || config.get('MONGODB_URI');
const MAX_RETRIES = config.get('MAX_RETRIES');
let num_retries = 0;
const db = mongoose.connection;

const initializeDatabase = (app, config) => {
  db.on('connecting', () => {
    console.log('Connecting to MongoDB...');
  });
  if (app && config.PORT) {
    const { PORT } = config;
    db.on('connected', () => {
      console.log(`Mongoose connection established at ${MONGODB_URI}`);
      app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
      });
    });
  }
  db.once('open', () => {
    console.log('Mongoose connection is open.');
  });
  db.on('error', (error) => {
    console.error(`Mongoose connection errored: ${JSON.stringify(error)}`);
    mongoose.disconnect();
  });
  db.on('disconnected', () => {
    if (MAX_RETRIES > num_retries) {
      num_retries++;
      console.log('Lost Mongoose connection. Retrying in 3...');
      setTimeout(() => {
        mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          socketTimeoutMS: 5000,
          connectTimeoutMS: 5000,
          autoReconnect: true,
        });
      }, 3000);
    } else {
      console.log('Mongoose connection errored out.');
      process.exit(1);
    }
  });
  db.on('reconnected', () => {
    console.log('Mongoose connection re-established.');
  });

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 5000,
    connectTimeoutMS: 5000,
  });

  return db;
};

module.exports = {
  initializeDatabase: initializeDatabase,
  db: db,
};
