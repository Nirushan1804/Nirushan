const express = require('express');
const router = express.Router()
const {
    addCategory,
    getCategory,
    deleteCategory,
    addSubCategory,
    getAllSubCategory,
    deleteSubCategory
} = require('../controllers/ref_data.controller')

router.route('/Category').post(addCategory)
router.route('/Category').get(getCategory)
router.route('/Category/:id').delete(deleteCategory)
router.route('/SubCategory').post(addSubCategory)
router.route('/SubCategory').get(getAllSubCategory)
router.route('/SubCategory/:id').delete(deleteSubCategory)

module.exports = router;

