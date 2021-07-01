const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.listAccess);
router.get('/agregar-producto', adminController.addAccess);
router.post('/agregar-producto', adminController.add);
router.get('/lista-productos', adminController.listAccess);
router.get('/modificar-producto', adminController.modifyAccess);

module.exports = router;