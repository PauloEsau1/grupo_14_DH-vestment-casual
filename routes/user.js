const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/registro', userController.registro)
router.get('/profile', userController.profileAccess)
router.post('/login', userController.loginAccess)

module.exports = router;