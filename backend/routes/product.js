const express = require('express')
const router = express.Router()
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct, deleteProductAdmin, uploadPostPhoto, resizePhoto} = require('../controllers/product')
const { protect, restrictTo } = require('../controllers/user')
const { validateMail } = require("../controllers/user")

router.route('/').get(getProducts)
router.route('/:id').get(getProduct)

// Protected Routes
router.use(protect, validateMail)
router.route('/').post(uploadPostPhoto, resizePhoto, addProduct)
router.route('/:id').patch(updateProduct).delete(deleteProduct)

router.use(restrictTo('admin'))
router.route('/adminDelete/:id').delete(deleteProductAdmin);

module.exports = router;
