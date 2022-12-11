require("dotenv").config({ path: "backend/config/config.env" });

const app = require("./app.js");

const connectDB = require("./config/database");

// connect database
connectDB();

const PORT = process.env.PORT;

const server = app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
});