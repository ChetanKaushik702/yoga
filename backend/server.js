if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const app = require("./app.js");

const connectDB = require("./config/database");

// connect database
connectDB();

// handling uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down the server due to uncaught exceptions.");
  process.exit(1);
});

const PORT = process.env.PORT;

const server = app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
});

// unhandled promise rejection error
process.on("unhandledRejection", (err) => {
  console.log("Error:", err);
  console.log("Shutting down the server due to unhandler promise rejections.");

  server.close(() => {
    process.exit(2);
  });
});
