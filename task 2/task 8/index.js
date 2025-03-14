const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());

// Add a new game to the collection
app.post('/games', async (req, res) => {
  const { title, platform, condition } = req.body;
  const game = await prisma.game.create({
    data: { title, platform, condition },
  });
  res.status(201).json(game);
});

// View entire collection or find a specific game
app.get('/games', async (req, res) => {
  const { title } = req.query;
  if (title) {
    const game = await prisma.game.findFirst({
      where: { title: { contains: title, mode: 'insensitive' } },
    });
    res.json(game || { message: 'Game not found' });
  } else {
    const games = await prisma.game.findMany();
    res.json(games);
  }
});

// Update game details and condition
app.put('/games/:id', async (req, res) => {
  const { id } = req.params;
  const { title, platform, condition } = req.body;
  const updatedGame = await prisma.game.update({
    where: { id: parseInt(id) },
    data: { title, platform, condition },
  });
  res.json(updatedGame);
});

// Remove a game from the collection
app.delete('/games/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.game.delete({
    where: { id: parseInt(id) },
  });
  res.status(200).json({ message: 'Game removed from collection' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
