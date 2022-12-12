const mongoose = require("mongoose");
const validator = require("validator");

// addressSchema
const addressSchema = new mongoose.Schema({
  city: {
    type: "String",
    required: [true, "Please enter city name"],
  },
  district: {
    type: "String",
    required: [true, "Please enter district name"],
  },
  state: {
    type: "String",
    required: [true, "Please enter state name"],
  },
  country: {
    type: "String",
    required: [true, "Please enter country name"],
  },
  pincode: {
    type: Number,
    required: [true, "Please enter pincode"],
  },
});

// person Schema
const personSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxlength: [30, "First name must not have more than 30 characters"],
  },
  lName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxlength: [30, "Last name must not have more than 30 characters"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Please enter your gender"],
  },
  dob: {
    type: Date,
    validate: {
      validator: function (v) {
        let date_diff = (Date.now() - v.getTime()) / 1000;
        date_diff /= 60 * 60 * 24;
        date_diff = Math.abs(Math.round(date_diff / 365.25));

        return date_diff >= 18 && date_diff <= 65;
      },
      message: "Age must be in the range of 18-65",
    },
    required: [true, "Please enter your date-of-birth"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email-id"],
  },
  phone: {
    type: String,
    validate(value) {
      return validator.isMobilePhone(value.toString());
    },
  },
  address: addressSchema,
});

module.exports = mongoose.model("person", personSchema);
