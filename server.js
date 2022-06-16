const express = require('express');

const app = express();

app.route('/').get((req, res) => {
  res.send('test');
});

app.listen(3000);