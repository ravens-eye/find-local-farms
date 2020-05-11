const util = require('util');
const wait = util.promisify(setTimeout);

const da = require('../server/models'); // data access
const { Business, User } = da;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farm-db', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userIds = [];
const businessIds = [];

const userData = require('../constants/userData');
const businessData = require('../constants/businessData');

async function seedUsers (data, exit = true, cb) {
  if (data) {
    return User
    .insertMany(data)
    .then(data => {
      data.forEach(obj => {
        userIds.push(obj._id);
      });
      console.log(data.length + ' users inserted');
      if (cb) {
        cb(null, data);
      } else if (exit) {
        process.exit(0);
      } else {
        return Promise.resolve(data);
      }
    }).catch(err => {
      console.log(err.errmsg + '\n');
      process.exit(1);
    });
  } else {
    console.log('No data');
    process.exit(0);
  }
}
  
async function seedBusinesses (data, exit = true, cb) {
  if (data) {
    return Business.insertMany(data)
      .then(data => {
        data.forEach(obj => {
          businessIds.push(obj._id);
        });
        console.log(data.length + ' businesses inserted');
        if (cb) {
          cb(null, data);
        } else if (exit) {
          process.exit(0);
        } else {
          return Promise.resolve(data);
        }
      }).catch(err => {
        console.error(err.errmsg + '\n');
        process.exit(1);
      });
  } else {
    console.log('No data');
    process.exit(0);
  }
}

async function seedLogic () {
  await seedBusinesses(businessData, false);
  userData[1].business = businessIds[1];
  await seedUsers(userData);
}

seedLogic();
