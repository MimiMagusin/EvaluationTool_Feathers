// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

module.exports = function(hook) {
  if (!hook.id) {
    return hook.app.service('students').find()
      .then((result) => {
        const allStudents = result.data;
        return allStudents[randomIndex(allStudents.length - 1)];
      });
  }

  // return hook.app.service('games').get(hook.id)
  //   .then((game) => {
  //     return hook.app.service('riddles').find({
  //       query: {
  //         riddle: {
  //           $nin: game.riddles.riddle
  //         }
  //       }
  //     })
  //       .then((result) => {
  //         const all = result.data.map((riddle) => riddle._id);
  //         return all[randomIndex(all.length - 1)];
  //       });
  //   });
};
