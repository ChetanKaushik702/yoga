const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.route("/register").post(personController.registerPerson);
router.route("/addBatch").post(personController.addbatch);
router.route("/changeBatch").put(personController.changeBatch);
router.route("/makePayment").post(personController.completePayment);
router.route("/enrollBatch").post(personController.enrollBatch);

module.exports = router;
