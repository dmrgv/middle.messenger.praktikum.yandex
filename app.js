const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const BUILD_DIR = __dirname + '/dist';

app.use(express.static(BUILD_DIR));

app.get('/login', (req, res) => {
  res.sendFile('index.html', { root: BUILD_DIR })
});

app.get('/register', (req, res) => {
  res.sendFile('register.html', { root: BUILD_DIR })
});

app.get('/chats', (req, res) => {
  res.sendFile('chats.html', { root: BUILD_DIR })
})

app.get('/profile', (req, res) => {
  res.sendFile('profile.html', { root: BUILD_DIR })
})

app.get('/500', (req, res) => {
  res.sendFile('500.html', { root: BUILD_DIR })
})

app.get('/*', (req, res) => {
  res.sendFile('404.html', { root: BUILD_DIR })
})

app.listen(PORT, function () {
  console.log(`Messenger app listening on port ${PORT}!`);
});
