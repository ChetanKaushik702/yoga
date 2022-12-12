const mongoose = require("mongoose");

// enroll schema
const enrollSchema = new mongoose.Schema({
  person: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "person",
    required: [true, "Please enter person id"],
  },
  batch: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "batch",
    required: [true, "Please enter batch id"],
  },
  feeStatus: {
    type: String,
    enum: ["completed", "pending"],
    default: "pending",
  },
});

module.exports = mongoose.model("enroll", enrollSchema);
