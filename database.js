const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  original: String,
  shortened: String,
});

const Url = mongoose.model('Url', urlSchema);

// Save new shortened URL to the database
const newUrl = new Url({
  original: 'http://example.com',
  shortened: 'https://short.ly/abcd123',
});

newUrl.save().then(() => console.log('URL saved to database'));
