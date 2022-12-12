const Person = require("../models/personModel");

// register a person
const registerPerson = async (req, res, next) => {
  const {
    fName,
    lName,
    email,
    gender,
    phone,
    dob,
    city,
    state,
    pincode,
    district,
    country,
  } = req.body;

  const address = {
    city,
    state,
    pincode,
    district,
    country,
  };

  const person = await Person.create({
    fName,
    lName,
    gender,
    email,
    address,
    dob,
    phone,
  });

  res.status(201).json({
    success: true,
    person,
  });
};

module.exports = {
  registerPerson,
};
