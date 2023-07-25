const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { insertQuizData } = require('./ExamModel'); // Import the ExamModel

const app = express();
const port = 7000;

// MongoDB Connection URL
// const mongoURI = 'mongodb://localhost:27017/Exam';
// const mongoURI = 'mongodb+srv://root:VRPd3ICLK6juCQCa@cluster0.dg4ocjz.mongodb.net/Exam?retryWrites=true&w=majority';
const mongoURI = 'mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Data to be inserted
    const name = 'Gaurav Mehla';
    const sid = '300347326';

    // Insert data into the "quizes" collection using the function
    insertQuizData(name, sid)
      .then(result => {
        console.log('Document inserted successfully:', result);
      })
      .catch(err => {
        console.error('Error inserting data:', err);
      });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Root route for GET request
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
