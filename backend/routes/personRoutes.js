const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

router.route("/register").post(personController.registerPerson);

module.exports = router;
