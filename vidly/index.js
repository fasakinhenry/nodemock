const express = require('express');
const app = express();
const joi = require('joi')

const genres = [
  { id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },
];

// Get request to fetch all genres
app.get('/api/genres', (req, res) => {
  res.send(courses);
});

// Fetch a specific genre
app.get('/api/courses/:id', (req, res) => {
    
})

const port = process.env.port || 3000;
app.listen(port, () => console.log('Listening on port 3000'));
