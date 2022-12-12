const express = require("express");
const app = express();

app.use(express.json());

// setting up routes
const person = require("./routes/personRoutes");

app.use("/api/v1/person", person);

module.exports = app;
