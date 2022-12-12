const Person = require("../models/personModel");
const Batch = require("../models/batchModel");
const Enroll = require("../models/enrollModel");
const AsyncErrorHandler = require("../middlewares/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

// register a person
const registerPerson = AsyncErrorHandler(async (req, res, next) => {
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
    password,
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
    password,
  });

  sendToken(person, 201, res);
});

// adding batches
const addbatch = AsyncErrorHandler(async (req, res, next) => {
  const { schedule, fee } = req.body;
  const batch = await Batch.create({ schedule, fee });
  res.status(201).json({
    success: true,
    batch,
  });
});

// complete payment
const completePayment = AsyncErrorHandler(async (req, res, next) => {
  /* 
    payment integration code
  */
  const { personId, batchId } = req.body;
  const enroll = await Enroll.create({
    personId,
    batchId,
    feeStatus: "completed",
  });
  res.status(200).json({
    success: true,
    enroll,
  });
});

// change batch
const changeBatch = AsyncErrorHandler(async (req, res, next) => {
  const day_number = new Date().getDate();
  if (day_number != 1) {
    return next(
      new ErrorHandler(
        `You can't change the batch in between. Please try again on the 1st of next month.`,
        400
      )
    );
  }
  const { personId, newBatchId } = req.body;
  console.log(req.body);
  if (!personId || !newBatchId) {
    return next(
      new ErrorHandler("Please enter both personId and newBatchId", 400)
    );
  }
  const person = await Person.findOne({ _id: personId });
  const batch = await Batch.findOne({ _id: newBatchId });
  if (!person || !batch) {
    return next(new ErrorHandler("Incorrect personId or batchId", 400));
  } else {
    const prevBatch = await Enroll.findOne({ person: personId });
    prevBatch.batch = newBatchId;
    await prevBatch.save();

    res.status(200).json({
      success: true,
      updatedBatch: prevBatch,
    });
  }
});

// enroll batch
const enrollBatch = AsyncErrorHandler(async (req, res, next) => {
  const { personId, batchId } = req.body;
  if (!personId || !batchId) {
    return next(
      new ErrorHandler("Please enter both personId and batchId", 400)
    );
  }
  const enrolled = await Enroll.create({
    person: personId,
    batch: batchId,
  });
  res.status(201).json({
    success: true,
    enrollBatch: enrolled,
  });
});

module.exports = {
  registerPerson,
  changeBatch,
  addbatch,
  completePayment,
  enrollBatch,
};
