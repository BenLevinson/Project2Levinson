const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getSocks', mid.requiresSecure, controllers.Sock.getSocks);
  app.get('/getAccInfo', mid.requiresLogin, controllers.Account.getAccInfo);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/home', mid.requiresLogin, controllers.Home.homePage);
  app.get('/account', mid.requiresLogin, controllers.Home.accountPage);
  app.get('/search', mid.requiresLogin, controllers.Home.searchPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/passChange', mid.requiresLogin,
  mid.requiresLogout, controllers.Account.changePassword);
  app.get('/notFound', mid.requiresSecure, controllers.Home.notFoundPage);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('*', mid.requiresSecure, controllers.Home.notFoundPage);
};

module.exports = router;
