const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.route('/').get((req, res) => {
  res.sendFile(process.cwd() + '/index.html');
});

app.route('/register').post((req, res) => {
  const { username, password } = req.body;
  res.send('welcome ' + username);
});

app.listen(3000);