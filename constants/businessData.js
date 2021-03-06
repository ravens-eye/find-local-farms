
const date = new Date();

const businessData = [
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
    features: ['isOpen', 'onlineOrder', 'delivery'],
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
    url: 'http://coonrockfarm.com/',
    address: '1021 Dimmocks Mill Rd, Hillsborough, NC 27278',
    location: [{ lat: 36.06619, lng: -79.12876 }],
    features: ['onlineOrder', 'delivery'],
    offerings: ['Beef', 'Lamb', 'Pork', 'Chicken', 'Produce'],
    notes: 'Delivery to all of the Triangle Area',
    createdAt: date
  },
  {
    name: 'Eight Arrows Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'eightarrowsfarm@gmail.com'
    },
    url: 'www.eightarrowsfarm.com',
    address: '300 Plum Tree Ln, Roxboro, NC 27574',
    location: [{ lat: 36.3971278, lng: -78.8741706 }],
    features: ['isOpen', 'onlineOrder', 'delivery'],
    offerings: ['Chicken', 'Turkey', 'Pork'],
    notes: 'Look at our website under products to see what\'s in stock and then send us an email',
    createdAt: date
  },
  {
    name: 'Bull City Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'samantha@bullcityfarm.com'
    },
    url: 'www.bullcityfarm.com',
    address: '5315 Isham Chambers Rd, Rougemont, NC 27572',
    location: [{ lat: 36.23005, lng: -78.82293 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Turkey', 'Eggs', 'Pork', 'Lamb'],
    notes: 'Check social media and website for details',
    createdAt: date
  },
  {
    name: 'Double R Cattle Services, Inc.',
    type: 'farm',
    contact: {
      phone: '123-456-789',
      email: 'info@DoubleRCattleServices.com'
    },
    url:'https://doublercattleservices.com/',
    address: '701 Ollie Ln, Hillsborough, NC 27278',
    location: [{ lat: 36.1398703, lng: -78.9723587 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Beef', 'Honey', 'Pork', 'Strawberries'],
    notes: 'Pick up at the farm',
    createdAt: date
  },
  {
    name: 'Fickle Creek Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'Orders@eightarrowsfarm.com'
    },
    url:'Ficklecreekfarm.com',
    address: '211 Fickle Creek Crossing, Efland, NC 27243',
    location: [{ lat: 36.018735, lng: -79.2027087 }],
    features: ['onlineOrder', 'delivery'],
    offerings: ['Beef', 'Eggs', 'Pork', 'Chicken', 'Lamb', 'Produce'],
    notes: 'Delivery to Raleigh, Durham, Chapel Hill / Carrboro, Cary, Hillsborough',
    createdAt: date
  },
  {
    name: 'MamaSprings Farm',
    type: 'farm',
    contact: {
      phone: null,
      email: 'mamaspringsfarm@gmail.com'
    },
    url:'www.mamaspringsfarm.com/',
    address: '622 S Mineral Springs Rd, Durham, NC 27703',
    location: [{ lat: 35.9732623, lng: -78.8319807 }],
    features: ['onlineOrder', 'curbsidePickup'],
    offerings: ['Produce', 'Microgreens', 'Flowers'],
    notes: 'On-Farm pickup on Fridays (pre-order only) & limited delivery to 27703. Email us to get our weekly pre-order form.',
    createdAt: date
  }
  
];

module.exports = businessData;
