const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allRoutes = require('./routes');

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.use(allRoutes)