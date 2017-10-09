const today = require('./today/today.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(today);
};
