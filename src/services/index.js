const today = require('./today/today.service.js');
const users = require('./users/users.service.js');
const batches = require('./batches/batches.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(today);
  app.configure(users);
  app.configure(batches);
  app.configure(users);
};
