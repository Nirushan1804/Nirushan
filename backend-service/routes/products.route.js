const express = require('express');
const router = express.Router()
const {
  addProducts,
  getProductsById,
  updateProducts,
  getAllProducts,
  deleteProducts,
  getInventoryByInventoryType
} = require('../controllers/products.controller')

router.route('/').post(addProducts)
router.route('/').get(getAllProducts)
router.route('/:id').get(getProductsById)
router.route('/:id').put(updateProducts)
router.route('/:id').delete(deleteProducts)
router.route('/').get(getInventoryByInventoryType)

module.exports = router;

