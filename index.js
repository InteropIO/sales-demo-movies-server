const express = require("express");
const app = express();
const fs = require('fs');

const movies = JSON.parse(fs.readFileSync('./data/movies.json'));

app.get("/", (req, res) => {
  res.send("Express on Vercel TEST");
});

// add movies endpoint
app.get("/movies", (req, res) => {
  res.send(movies);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app