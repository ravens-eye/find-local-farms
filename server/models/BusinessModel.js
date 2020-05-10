const mongoose = require('mongoose');
const { Schema } = mongoose;
const { validateAddress, validateEmail } = require('../utils/validators');

const BusinessSchema = new Schema ({
  name: {
    type: String,
    required: 'A unique business name is required.',
    trim: true,
    unique: true
  },
  type: {
    type: String,
    trim: true,
  },
  contact: {
    phone: {
      type: String,
      // validate: [validatePhone, 'Must be a valid phone number']
    },
    email: {
      type: String,
      validate: [validateEmail, 'Please enter a valid email']
    }
  },
  url: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    validate: [validateAddress, 'A valid address is required']
  },
  location: [{
    // We'll do a [{lat, lng}] array for now
    lat: String,
    lng: String
  }],
  // Some common features a farm might have
  features: {
    type: Array,
    enumValues: ['isOpen', 'curbsidePickup', 'delivery', 'onlineOrder']
  },
  offerings: {
    type: Array
  },
  // Strings that the proprietor can define
  notes: {
    type: Array,
    validate: [note => note.length <= 140, 'Notes must be 140 characters or less']
  },
  createdAt: {
    type: Date,
    required: 'Creation date required'
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

const Business = module.exports = mongoose.model('Business', BusinessSchema);
