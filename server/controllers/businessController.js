
const Business = require('../models').Business;

async function getAllBusinesses (limit) {
  return Business.find({})
    .select('-__v')
    .sort({ 'dateUpdated': -1 })
    .limit(limit || 20)
    .then(bus => bus);
}

module.exports = {
  getAllBusinesses: getAllBusinesses
};
