// npm i -D jest supertest
// Use this code to test NODE_OPTIONS=--experimental-vm-modules npx jest
import express from 'express';

const app = express();

app.use(express.json());
app.post('/users', async (req, res) => {
  const { password, username } = req.body;
  if (!password || !username) {
    res.sendStatus(400);
    return;
  }

  res.send({ userId: 0 });
});

export default app;
