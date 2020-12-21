import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';
// app config
const app = express();
const port = process.env.PORT || 8001;
const connection =
  'mongodb+srv://admin:KKn02NSaQ2wMWSjC@cluster0.1soid.mongodb.net/tinderdb?retryWrites=true&w=majority';

//middleware
app.use(express.json());
app.use(Cors());

//db confing
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get('/', (req, res) => {
  res.status(200).send('made it');
});

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listeners
app.listen(port, () => {
  console.log(`start at localhost ${port}`);
});

//KKn02NSaQ2wMWSjC
