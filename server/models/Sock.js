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
