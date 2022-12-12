const mongoose = require("mongoose");

// batch schema
const batchSchema = new mongoose.Schema({
  schedule: {
    type: String,
    enum: ["6-7AM", "7-8AM", "8-9AM", "5-6PM"],
    required: [true, "Please enter schedule"],
  },
  fee: {
    type: Number,
    required: [true, "Please enter fee amount"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("batch", batchSchema);
