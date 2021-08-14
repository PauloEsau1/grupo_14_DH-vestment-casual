const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/',indexController.main);
router.get('/categorias/:categoria',indexController.categorias);
router.get('/detalle-producto/:id', indexController.detalle);
router.get('/carrito', indexController.carrito);

module.exports = router;
