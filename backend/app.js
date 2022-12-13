const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// error Middleware
const errorMiddlerware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// setting up routes
const person = require("./routes/personRoutes");

app.use("/api/v1/person", person);

app.use(errorMiddlerware);

// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

// console.log(path.join(__dirname, "../frontend/build", "index.html"));

module.exports = app;
