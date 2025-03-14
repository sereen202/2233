const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let scores = [];
let currentId = 1;

// Submit a Score
app.post('/scores', (req, res) => {
  const { playerName, score } = req.body;
  const newScore = { id: currentId++, playerName, score };
  scores.push(newScore);
  res.status(201).json(newScore);
});

// View the Leaderboard
app.get('/scores', (req, res) => {
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  res.json(sortedScores);
});

// Delete a Score
app.delete('/scores/:id', (req, res) => {
  const { id } = req.params;
  scores = scores.filter(score => score.id !== parseInt(id));
  res.status(200).json({ message: `Score with id ${id} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
