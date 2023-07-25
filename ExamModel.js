const mongoose = require('mongoose');

// Create a Mongoose schema for the "quizes" collection
const quizSchema = new mongoose.Schema({
  name: String,
  sid: String,
});

// Create a Mongoose model for the "quizes" collection
const Quiz = mongoose.model('Quiz', quizSchema);

// Function to insert data into the "quizes" collection
function insertQuizData(name, sid) {
  // Create a new Quiz document using the Mongoose model
  const newQuiz = new Quiz({
    name: name,
    sid: sid,
  });

  // Save the new Quiz document to the database
  return newQuiz.save();
}

module.exports = { Quiz, insertQuizData };
