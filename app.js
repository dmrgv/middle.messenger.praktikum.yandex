const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/login', (req, res) => {
  res.sendFile('index.html', { root: './dist' })
});

app.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './dist' })
});

app.get('/500', (req, res) => {
  res.sendFile('500.html', { root: './dist' })
})

app.get('/*', (req, res) => {
  res.sendFile('404.html', { root: './dist' })
})

app.listen(PORT, function () {
  console.log(`Messenger app listening on port ${PORT}!`);
});
