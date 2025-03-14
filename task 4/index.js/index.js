const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let missions = [];

// Create a new mission
app.post('/missions', (req, res) => {
    const mission = { id: missions.length + 1, ...req.body };
    missions.push(mission);
    res.status(201).json(mission);
});

// Retrieve all missions
app.get('/missions', (req, res) => {
    res.json(missions);
});

// Retrieve a specific mission by ID
app.get('/missions/:id', (req, res) => {
    const mission = missions.find(m => m.id == req.params.id);
    mission ? res.json(mission) : res.status(404).send("Mission not found");
});

// Update mission status
app.put('/missions/:id', (req, res) => {
    const mission = missions.find(m => m.id == req.params.id);
    if (mission) {
        mission.status = req.body.status;
        res.json(mission);
    } else {
        res.status(404).send("Mission not found");
    }
});

// Cancel a mission
app.delete('/missions/:id', (req, res) => {
    missions = missions.filter(m => m.id != req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
