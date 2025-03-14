const express = require('express');
const app = express();
const port = 3000;

const fortunes = [
    "You will have a great day!",
    "Success is coming your way.",
    "A surprise is waiting for you."
];

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

const facts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren’t.",
    "Octopuses have three hearts."
];

app.get('/fortune', (req, res) => {
    res.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get('/joke', (req, res) => {
    res.send(jokes[Math.floor(Math.random() * jokes.length)]);
});

app.get('/fact', (req, res) => {
    res.send(facts[Math.floor(Math.random() * facts.length)]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
