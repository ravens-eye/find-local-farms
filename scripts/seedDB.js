const util = require('util');
const wait = util.promisify(setTimeout);

const da = require('../server/models');
const { Business, User } = da;

const mongoose = require('mongoose');

mongoose.connect(process.env.mongoUri || 'mongodb://localhost/farm-db', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userIds = [];
const businessIds = [];

const date = new Date();
console.log('Date: ' + date);

const userSeed = [
  {
    username: 'tlburchh',
    firstName: 'Tom',
    lastName: 'Burchhardt',
    accountType: 'Personal',
    verified: true,
    createdAt: date
  },
  {
    username: 'HGarvey',
    firstName: 'Harold',
    lastName: 'Garvey',
    business: '',
    accountType: 'Business',
    verified: true,
    createdAt: date
  }
];

const businessSeed = [
  {
    name: 'Dawnbreaker Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'ben@dawnbreakerfarms.com'
    },
    url: 'https://dawnbreaker-farms.myshopify.com/collections/all',
    address: '3200 Breeze Rd, Hurdle Mills, NC 27541',
    location: [{ lat: 36.23335, lng: -79.05132 }],
    features: ['isOpen', 'delivery'],
    offerings: ['Pork', 'Chicken', 'Turkey','Duck'],
    notes: 'Delivery to all of the Triangle Area',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'orders@coonrockfarm.com'
    },
    address: '1021 Dimmocks Mill Rd, Hillsborough, NC 27278',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'delivery'],
    offerings: ['Beef', 'Lamb', 'Pork', 'Chicken', 'Produce'],
    notes: 'Delivery to all of the Triangle Area',
    createdAt: date
  },
  {
    name: 'Eight Arrows Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@eightarrowsfarm.com'
    },
    address: '789 An avenue somewhere',
    location: [{ lat: 35.845616, lng: -79.094813 }],
    features: ['isOpen', 'delivery'],
    offerings: ['Carrots', 'Candles', 'Flopsweat'],
    notes: 'Come see a goat movie with us.',
    createdAt: date
  }
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
  {
    name: 'Coon Rock Farm',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'orders@coonrockfarm.com'
    },
    address: '456 Other Street',
    location: [{ lat: 35.909864, lng: -78.791740 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Cheese', 'Eggs'],
    notes: 'We\'re almost sold out!',
    createdAt: date
  },
];


function seedUsers (cb, data, exit = true) {
  if (data) {
    User
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
      }
    }).catch(err => {
      console.log(err);
      process.exit(1);
    });
  } else {
    console.log('No data');
    process.exit(0);
  }
}
  
function seedBusinesses (cb, data, exit = true) {
  if (data) {
    Business
    .insertMany(data)
    .then(data => {
      data.forEach(obj => {
        businessIds.push(obj._id);
      });
      console.log(data.length + ' businesses inserted');
      if (cb) {
        cb(null, data);
      } else if (exit) {
        process.exit(0);
      }
    }).catch(err => {
      console.log(err);
      process.exit(1);
    });
  } else {
    console.log('No data');
    process.exit(0);
  }
}

seedBusinesses(null, businessSeed, false);
wait(1000).then(value => {
  userSeed[1].business = businessIds[1];
  seedUsers(null, userSeed);
});
