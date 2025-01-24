// server.js (Node.js with Express)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Mock database for URL shortening
let urlHistory = [];

// Route to shorten the URL
app.post('/shorten', (req, res) => {
  const { url } = req.body;

  if (!isValidURL(url)) {
    return res.status(400).send({ error: 'Invalid URL' });
  }

  const shortenedUrl = 'https://short.ly/' + Math.random().toString(36).substring(7);
  urlHistory.push({ original: url, shortened: shortenedUrl });

  res.send({ shortenedUrl });
});

// Route to get history
app.get('/history', (req, res) => {
  res.json(urlHistory);
});

// Helper to validate URL
function isValidURL(url) {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/;
  return regex.test(url);
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
