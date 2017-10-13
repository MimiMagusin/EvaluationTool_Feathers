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
    startDate: '12-12-2013',
    endDate: '11-11-2012',
    students: [],
    totalScore: [],
  },
  {
    number: 2,
    startDate: '11-11-2013',
    endDate: '12-12-2014',
    students: [],
    totalScore: [],
  }
];

const students = [
  {
    firstName: 'jantje green',
    lastName: 'pietje',
    profilePicture: 'https://www.ldatschool.ca/wp-content/uploads/2015/03/Young-student.jpg',
    batch: 1,
    currentEvaluation: "green",
  },
  {
    firstName: 'jantje red',
    lastName: 'pietje',
    profilePicture: 'https://www.ldatschool.ca/wp-content/uploads/2015/03/Young-student.jpg',
    batch: 1,
    currentEvaluation: "red",
  },
  {
    firstName: 'jantje yellow',
    lastName: 'pietje',
    profilePicture: 'https://www.ldatschool.ca/wp-content/uploads/2015/03/Young-student.jpg',
    batch: 1,
    currentEvaluation: "yellow",
  },
  {
    firstName: 'jantje',
    lastName: 'pietje',
    profilePicture: 'https://www.ldatschool.ca/wp-content/uploads/2015/03/Young-student.jpg',
    batch: 1,
    currentEvaluation: "",
  }
]



//Functions that perform the seeding: Uncomment When you dropped your db
const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

  feathersClient.service('users').create(user)
  .catch(function(error) {
    console.error('Error creating user!', error);
  });

  feathersClient.authenticate({
    strategy: 'local',
    email: user.email,
    password: user.password
  })
    .then(() => {
      batches.map((batch) => {
        feathersClient.service('batches').create(batch)
          .then((result) => {
            console.log('batch seeded...', result.question);
          }).catch((error) => {
            console.error('Error seeding batch!', error.message);
          });
      });

    })
    .catch(function(error){
      console.error('Error authenticating!', error);
    });

    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        students.map((batch) => {
          feathersClient.service('students').create(batch)
            .then((result) => {
              console.log('student seeded...', result.question);
            }).catch((error) => {
              console.error('Error seeding student!', error.message);
            });
        });

      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
