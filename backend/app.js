const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// error Middleware
const errorMiddlerware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

// setting up routes
const person = require("./routes/personRoutes");

app.use("/api/v1/person", person);

app.use(errorMiddlerware);

module.exports = app;
