const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/', controller.createProduct);
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

// Extra queries
router.get('/category/:category', controller.getByCategory);
router.get('/by-color/:color', controller.getByVariantColor);

module.exports = router;
