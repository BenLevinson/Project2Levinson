<<<<<<< HEAD
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

=======
const models = require('../models');

const Sock = models.Sock;

const getSocks = (request, response) => {
  const req = request;
  const res = response;
  return Sock.SockModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.json({ socks: docs });
  });
};

/* const makeSock = (req, res) => {
  const sockData = {
    name: 'Scary Socks',
    category: 'Scary',
    price: 10.99,
    picture: 'assets/img/scarySock.jpg',
    owner: req.session.account._id,
  };
  const newSock = new Sock.SockModel(sockData);

  const sockPromise = newSock.save();
  sockPromise.then(() => res.json({ redirect: '/home' }));
  sockPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Sock already exists.' });
    }

    return res.status(400).json({ error: 'An unexpected error has occured.' });
  });

  return sockPromise;
}; */


module.exports.getSocks = getSocks;
// module.exports.makeSock = makeSock;

>>>>>>> 45205b6fc2bb0d0dd1ef6de83f89943a8cfcbe08
