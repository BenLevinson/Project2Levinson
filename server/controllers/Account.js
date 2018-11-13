const models = require('../models');

const Account = models.Account;

const getAccInfo = (account) => {
  return Account.AccountModel.getAccInfo(account);
};

const loginPage = (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const login = (request, response) => {
  const req = request;
  const res = response;
  // force cast to strings to cover some security flaws
  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }
    req.session.account = Account.AccountModel.toAPI(account);
    console.log(req.session.account.username);
    getAccInfo(req.session.account);
    return res.json({ redirect: '/home' });
  });
};

const signup = (request, response) => {
  const req = request;
  const res = response;

  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
    const accountData = {
      username: req.body.username,
      salt,
      password: hash,
      purchases: 0,
      funds: 100,
    };
    const newAccount = new Account.AccountModel(accountData);
    const savePromise = newAccount.save();

    savePromise.then(() => {
      req.session.account = Account.AccountModel.toAPI(newAccount);
      getAccInfo(req.session.account);
      res.json({ redirect: '/home' });
    });

    savePromise.catch((err) => {
      console.log(err);
      if (err.code === 11000) {
        return res.status(400).json({ error: 'Username already in use.' });
      }
      return res.status(400).json({ error: 'An unexpected error occurred.' });
    });
  });
};

const changePassword = (request, response) => {
  const req = request;
  const res = response;

  req.body.pass = `${req.body.newPass1}`;
  req.body.pass2 = `${req.body.newPass2}`;

  if (!req.body.newPass1 || !req.body.newPass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (req.body.newPass1 !== req.body.newPass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  return Account.AccountModel.findByUsername(req.session.account.username).then(function(user) {
    if (user) {
      user.setPassword(req.body.pass2, function() {
        user.save();
        res.status(200).json({ message: 'Password reset successful!' });
      });
    } else {
      res.status(500).json({ message: 'User does not exist.' });
    }
  });
};

const getToken = (request, response) => {
  const req = request;
  const res = response;
  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };
  res.json(csrfJSON);
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signup = signup;
module.exports.getToken = getToken;
module.exports.getAccInfo = getAccInfo;
module.exports.changePassword = changePassword;
