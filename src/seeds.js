/* eslint-disable no-console */
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  email: 'teacher@teacher.dev',
  password: 'abcd1234'
};

const batches = [
  {
    number: 1,
    startDate: 11-11-2011,
    endDate: 12-12-2011,
    students: [],
    totalScore: [],
  },
  {
    number: 2,
    startDate: 11-11-2012,
    endDate: 12-12-2012,
    students: [],
    totalScore: [],
  }
]

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
