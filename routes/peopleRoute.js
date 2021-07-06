const express = require("express");
const router = express.Router();

const peopleController = require("../controllers/peoples");

router.post("/people", peopleController.getPeople);

module.exports = router;
