
const User = require('./UserModel');
const Business = require('./BusinessModel');

const dataAccess = {
  Business: Business,
  User: User
};

module.exports = dataAccess;