// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const evaluations = new Schema ({
    color: { type: String },
    remark: { type: Text },
    date: { type: Date, default: Date.now},
  })

  const students = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicture: { type: String, required: true },
    evaluation: [evaluationSchema],
    batch: { type: String},
    currentEvaluation: { type: String},
  })


  const batches = new Schema({
    number: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    students: [studentSchema],
    totalScore: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('batches', batches);
};


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const playerSchema = new mongooseClient.Schema({
    userId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    points: [{ type: Number, default: 0 }],

    riddle: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'riddles' }],
    question: [{ type: String }],
    won: [{ type: Boolean }]
  });

  const games = new mongooseClient.Schema({
    title: { type: String, required: true },
    winnerId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    started: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    players: [ playerSchema ],
  });
  games.loadClass(GameClass);
  return mongooseClient.model('games', games);
