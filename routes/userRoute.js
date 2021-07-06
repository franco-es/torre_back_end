const express = require('express')
const router = express.Router();
const userController = require('../controllers/user');

router.get('/getUser', userController.getUser);


module.exports = router;