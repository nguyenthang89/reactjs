import express from 'express';
import bodyParser from 'body-parser';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://admin:TUGKi78XRA1WrQe5@cluster0.2ztyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use('/', cors());

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.use('/posts', posts);


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connedted to DB');
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
  }).catch((err) => {
      console.log('err', err);
  });

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
