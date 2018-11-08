const models = require('../models');

const Sock = models.Sock;

const getSocks = (request, response) => {
  // const req = request;
  const res = response;

  return Sock.SockModel.findSocks('Scary', (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.json({ socks: docs });
  });
};

module.exports.getSocks = getSocks;
