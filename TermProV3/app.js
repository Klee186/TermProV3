const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/feedback', (req, res) => {
  res.sendFile(__dirname + '/feedback.html');
});

app.post('/feedback-submit', (req, res) => {
  const likes = req.body.likes;
  const suggestions = req.body.suggestions;

  res.send(`Thank you for your feedback!<br>Likes: ${likes}<br>Suggestions: ${suggestions}`);
});

app.post('/toggle-sidebar', (req, res) => {

  res.send('Sidebar toggled successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
