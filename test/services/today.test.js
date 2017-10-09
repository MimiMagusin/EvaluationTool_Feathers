const assert = require('assert');
const app = require('../../src/app');

describe('\'today\' service', () => {
  it('registered the service', () => {
    const service = app.service('today');

    assert.ok(service, 'Registered the service');
  });
});
