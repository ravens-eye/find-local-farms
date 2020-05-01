const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema ({
  username: {
    type: String,
    required: 'A unique username is required.',
    trim: true,
    unique: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim:true
  },
  accountType: {
    type: String,
    enum: ['Personal', 'Business'],
    required: 'Account type is required'
  },
  business: {
    type: ObjectId,
    ref: 'Business'
  },
  verified: {
    type: Boolean,
    default: false
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

const User = module.exports = mongoose.model('User', UserSchema);
