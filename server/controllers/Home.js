const homePage = (req, res) => {
  return res.render('app', { csrfToken: req.csrfToken() });
};

const accountPage = (req, res) => {
  return res.render('account', { csrfToken: req.csrfToken() });
};

const searchPage = (req, res) => {
  return res.render('search', { csrfToken: req.csrfToken() });
};


module.exports.homePage = homePage;
module.exports.accountPage = accountPage;
module.exports.searchPage = searchPage;
