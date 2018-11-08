<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const _ = require('underscore');

let SockModel = {};

// mongoose.Types.ObjectId is a function that
// converts string ID to a real mongo ID

const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

const SockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  category: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  price: {
    type: Number,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

SockSchema.statics.toAPI = (doc) => ({
  type: doc.type,
});

/* SockSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };
  return SockModel.find(search).select('type').exec(callback);
}; */

SockSchema.statics.addSock = (n, c, pr, pi) => {
  const sockData = {
    name: n,
    category: c,
    price: pr,
    picture: pi,
  };

  console.log(sockData);
  return SockModel.create(sockData);
};

SockSchema.statics.findSocks = (c, callback) => {
  /* const search = {
    category: c,
  };

  SockModel.count({ category: c }, function(err, count) {
    if (err) {
      console.log(err);
    }
    console.log('there are %d socks', count);
    for (let i = 0; i < count; i++) {
      const thisSock = SockModel.find(search).select('category').exec(callback);
      console.log(thisSock);
    }
  }); */
  const thisSock = SockModel.find({ category: 'Super' }).exec(callback);
  console.log(thisSock);
};

SockModel = mongoose.model('Sock', SockSchema);

SockModel.addSock('Baseball Socks', 'Cool', 13.99, 'assets/img/baseballSock.jpg');
SockModel.addSock('Black Socks', 'Normal', 9.99, 'assets/img/blackSock.jpg');
SockModel.addSock('Bob Socks', 'Funny', 11.99, 'assets/img/bobSock.jpg');
SockModel.addSock('Caution Socks', 'Crazy', 9.99, 'assets/img/cautionSock.jpg');
SockModel.addSock('Checkered Socks', 'Normal', 9.99, 'assets/img/checkerSock.jpg');
SockModel.addSock('Really Cool Socks', 'Cool', 12.99, 'assets/img/coolSock.jpg');
SockModel.addSock('Couch Socks', 'Funny', 11.99, 'assets/img/couchSock.jpg');
SockModel.addSock('Dog Socks', 'Funny', 14.99, 'assets/img/dogSock.jpg');
SockModel.addSock('Duck Socks', 'Funny', 13.99, 'assets/img/duckSock.jpg');
SockModel.addSock('Elf Socks', 'Super', 9.99, 'assets/img/elfSock.jpg');
SockModel.addSock('Fox Socks', 'Funny', 9.99, 'assets/img/foxSock.jpg');
SockModel.addSock('Funny Socks', 'Funny', 10.99, 'assets/img/funnySock.jpg');
SockModel.addSock('Space Jam Socks', 'Super', 12.99, 'assets/img/jamSock.jpg');
SockModel.addSock('Koala Socks', 'Funny', 10.99, 'assets/img/koalaSock.jpg');
SockModel.addSock('Lightning Socks', 'Scary', 12.99, 'assets/img/lightningSock.jpg');
SockModel.addSock('Night Socks', 'Scary', 12.99, 'assets/img/nightSock.jpg');
SockModel.addSock('Socks', 'Normal', 8.99, 'assets/img/normalSock.jpg');
SockModel.addSock('Penguin Socks', 'Funny', 13.99, 'assets/img/penguinSock.jpg');
SockModel.addSock('Pig Socks', 'Funny', 11.99, 'assets/img/pigSock.jpg');
SockModel.addSock('Pow Socks', 'Super', 13.99, 'assets/img/powSock.jpg');
SockModel.addSock('Pringle Socks', 'Crazy', 12.99, 'assets/img/pringleSock.jpg');
SockModel.addSock('Red Socks', 'Normal', 10.99, 'assets/img/redSock.jpg');
SockModel.addSock('Scary Socks', 'Scary', 10.99, 'assets/img/scarySock.jpg');
SockModel.addSock('Scarier Socks', 'Scary', 11.99, 'assets/img/abstractSock.jpg');
SockModel.addSock('Superhero Sock Bundle', 'Super', 29.99, 'assets/img/superSock.jpg');
SockModel.addSock('Sushi Socks', 'Crazy', 13.99, 'assets/img/sushiSock.jpg');
SockModel.addSock('Tool Socks', 'Cool', 11.99, 'assets/img/toolSock.jpg');
SockModel.addSock('USA Socks', 'Cool', 13.99, 'assets/img/usaSock.jpg');
SockModel.addSock('White Socks', 'Normal', 9.99, 'assets/img/whiteSock.jpg');

module.exports.SockModel = SockModel;
module.exports.SockSchema = SockSchema;
=======
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const _ = require('underscore');

let SockModel = {};

// mongoose.Types.ObjectId is a function that
// converts string ID to a real mongo ID

const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

const SockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  category: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  price: {
    type: Number,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

SockSchema.statics.toAPI = (doc) => ({
  type: doc.type,
});

SockSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };
  return SockModel.find(search).select('type').exec(callback);
};

SockSchema.statics.addSock = (n, c, pr, pi) => {
  const newSock = {
    name: n,
    category: c,
    price: pr,
    picture: pi,
  };

  return SockModel.insert(newSock);
};


SockModel = mongoose.model('Sock', SockSchema);

SockModel.addSock('Scary Socks', 'Scary', 10.99, 'assets/img/scarySock.jpg');

module.exports.SockModel = SockModel;
module.exports.SockSchema = SockSchema;
>>>>>>> 45205b6fc2bb0d0dd1ef6de83f89943a8cfcbe08
