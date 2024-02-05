const express = require("express");
const app = express();
var cors = require('cors')
const fs = require('fs');

const movies = JSON.parse(fs.readFileSync(process.cwd() + '/data/movies.json', 'utf8'));

// // enable CORS globally
// app.use(cors())

app.get("/", (req, res) => {
  res.send("Express on Vercel TEST");
});

// add movies endpoint + enable CORS for a single route
app.get("/movies", cors(), (req, res) => {
  res.send(movies);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app