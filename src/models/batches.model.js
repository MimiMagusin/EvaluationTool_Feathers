// batches-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const evaluations = new Schema ({
    color: { type: String },
    remark: { type: String },
    date: { type: String },
  });

  const students = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicture: { type: String, required: true },
    evaluation: [evaluations],
    batch: { type: String},
    currentEvaluation: { type: String},
  });


  const batches = new Schema({
    number: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    students: [students],
    totalScore: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('batches', batches);
};
