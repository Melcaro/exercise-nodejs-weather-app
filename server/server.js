const express = require('express');
const cors = require('cors');
const app = express();

const cityRouter = require('./routes/city');

app.use(cors());

app.get('/', function(req, res) {
  res.send('hello');
});

app.use('/city', cityRouter);

app.listen(process.env.PORT || 5000);
