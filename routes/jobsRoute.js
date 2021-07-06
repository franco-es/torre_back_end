const express = require('express');
const router = express.Router();
const jobController = require("../controllers/jobs");

router.get('/jobs', jobController.getJobs);

module.exports = router;