const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/registro',userController.registro)


module.exports = router;