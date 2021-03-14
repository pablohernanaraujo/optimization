const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
  res.redirect('https://' + req.headers.host + req.url);
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
