const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect mongoose
mongoose.connect("mongodb://localhost/googlebooks", {useNewUrlParser: true});

// Define API routes here

app.get("/api/books", (req, res) => {
  db.Book.find({}).then(dbResponse => {
    res.json(dbResponse);
  }).catch(err => {
    console.log(err);
  });
});

app.post("/api/books", (req, res) => {
  db.Book.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  }).then(dbResponse => {
    res.json(dbResponse);
  }).catch(err => {
    console.log(err);
  });
});

app.delete("/api/books/:id", (req, res) => {
  db.Book.remove({
    _id: req.params.id
  }).then(dbResponse => {
    res.json(dbResponse);
  }).catch(err => {
    console.log(err);
  });
});



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
