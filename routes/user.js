const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

const adminController = require('../controllers/adminController');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
router.get('/registro',guestMiddleware, userController.registro); 

router.post('/registro', userController.crearRegistro);
router.post('/login', userController.loginAccess);
router.get('/profile',authMiddleware,userController.profileAccess);
router.get('/logout',userController.loginOut);

router.get('/agregar-usuario', adminController.addForm);
router.post('/agregar-usuario', fileUpload.array('avatar'), adminController.addUser);

router.get('/lista-usuarios/:page?', adminController.listAccess);
router.get('/modificar-usuario/:id', adminController.modifyUser);
router.put('/modificar-usuario/:id/:avatar?', fileUpload.array('avatar'), adminController.updateUser);

router.delete('/borrar-usuario/:id', adminController.deleteUser);
module.exports = router;