// Initializes the `today` service on path `/today`
const createService = require('feathers-mongoose');
const createModel = require('../../models/today.model');
const hooks = require('./today.hooks');
const filters = require('./today.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'today',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/today', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('today');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
