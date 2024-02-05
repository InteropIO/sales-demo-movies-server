const express = require("express");
const app = express();
let movies = '/data/movies.json';

app.get("/", (req, res) => {
  res.send("Express on Vercel TEST");
});

// add movies endpoint
app.get("/movies", (req, res) => {
  console.log('🚀 ~ app.get ~ movies:', movies)
  res.send(movies);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app