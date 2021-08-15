const express = require('express');
const multer = require('multer');
const PATH = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let multerDS = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = PATH.join(__dirname, '../public/images/products')
        callback(null, folder);
    },

    filename: (req, file, callback) => {
        let name = 'product-img-' + Date.now() + PATH.extname(file.originalname);
        callback(null, name);
    }
});
let fileUpload = multer({storage: multerDS});
const adminController = require('../controllers/adminController');

router.get('/', adminController.listAccess);

router.get('/agregar-producto', adminController.addAccess);
router.post('/agregar-producto', fileUpload.array('photos'), adminController.add);

router.get('/lista-productos/:page?', adminController.listAccess);
router.get('/modificar-producto/:id', adminController.modifyAccess);
router.put('/modificar-producto/:id/:photos?', fileUpload.array('photos'), adminController.update);

router.delete('/:id', adminController.delete);


/*Users */
router.get('/agregar-usuario', adminController.addForm);
router.post('/agregar-usuario', fileUpload.array('avatar'), adminController.addUser);

router.get('/lista-usuarios/:page?', adminController.listAccess);
router.get('/modificar-usuario/:id', adminController.modifyUser);
router.put('/modificar-usuario/:id/:avatar?', fileUpload.array('avatar'), adminController.updateUser);

router.delete('/borrar-usuario/:id', adminController.deleteUser);

module.exports = router;