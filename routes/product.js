const express = require('express')
const router = express.Router()
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product')

router.route('/').get(getProducts)
router.route('/:id').get(getProduct)

// Protected Routes
router.route('/').post(addProduct)
router.route('/:id').patch(updateProduct).delete(deleteProduct)

module.exports = router;
