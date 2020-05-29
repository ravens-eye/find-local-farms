const { Business } = require('../models');

//create business
async function createBusiness(busObject) {
  busObject.dateCreated = new Date();

  // TODO field validation

  return Business.create(busObject)
    .then((business) => {
      return { ok: true, data: business._id };
    })
    .catch((err) => {
      return { error: err };
    });
}

//retrieve all businesses
async function getAllBusinesses(limit) {
  return Business.find({})
    .select('-__v')
    .sort({ dateUpdated: -1 })
    .limit(limit || 20)
    .then((businesses) => {
      return { ok: true, data: businesses };
    })
    .catch((err) => {
      return { error: err };
    });
}

// Find business by ID
async function getBusinessById(id) {
  return Business.findById(id)
    .select('-__v')
    .then((business) => {
      return { ok: true, data: business };
    })
    .catch((err) => {
      return { error: err };
    });
}

async function updateBusinessById(id, busObj) {
  busObj.dateUpdated = new Date(); // Entry updated now
  delete busObj.dateCreated; // User can't modify date created
  return Business.findOneAndUpdate({ _id: id }, busObj, {
    select: '-__v -_id',
    new: true,
  })
    .then((business) => {
      return { ok: true, data: business };
    })
    .catch((err) => {
      return { error: err };
    });
}

// Keep deleting code out for now.

// async function deleteBusById(id, busObj) {
//   return Business.findOneAndDelete({ _id: id }, busObj, {
//     select: '-__v -_id',
//     new: true,
//   })
//     .then(deleted => {
//       return { ok: true, data: deleted };
//     })
//     .catch(err => {
//       return { error: err };
//     });
// }

module.exports = {
  createBusiness: createBusiness,
  getAllBusinesses: getAllBusinesses,
  getBusinessById: getBusinessById,
  updateBusinessById: updateBusinessById,
  // deleteBusById: deleteBusById,
};
