// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const rightStudent = require('./right-student');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createGame (hook) {
    return rightStudent(hook)
      .then((student) => {

        hook.data = {
          firstName: hook.params.firstName,
          lastName: hook.params.lastName,
          profilePicture: hook.params.profilePicture,
          batch: hook.params.batch,
          currentEvaluation: hook.params.currentEvaluation,
        };

        return Promise.resolve(hook);
      });
  };
};
