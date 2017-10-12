// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

      const evaluations = new Schema ({
        color: { type: String },
        remark: { type: String },
        date: { type: Date },
      });

      const students = new Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        profilePicture: { type: String, required: true },
        evaluation: [evaluations],
        batch: { type: String},
        currentEvaluation: { type: String},
      });

  return mongooseClient.model('students', students);
};
