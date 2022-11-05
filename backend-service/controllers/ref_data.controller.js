const asyncHandler = require('express-async-handler');
const {Category, SubCategory} = require("../models/ref_data.model");

// @desc    Create new Category
// @route   POST /api/v1/Category
// @access  Public
const addCategory = asyncHandler(async (req, res) => {
    const category = await new Category(req.body);

    try {
      const savedCategory = await category.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get all Category
// @route   GET /api/v1/Category
// @access  Public
const getCategory = asyncHandler(async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).json(category)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete Category
// @route   DELETE /api/v1/Category/:id
// @access  Public
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
  
    if (category) {
      await category.remove()
      res.json({ message: 'Category removed' })
    } else {
      res.status(404)
      throw new Error('Category not found')
    }
})

// @desc    Create new SubCategory
// @route   POST /api/v1/SubCategory
// @access  Public
const addSubCategory = asyncHandler(async (req, res) => {
    const subcategory = await new SubCategory(req.body);

    try {
      const savedSubCategory = await subcategory.save();
      res.status(201).json(savedSubCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get all SubCategory
// @route   GET /api/v1/SubCategory
// @access  Public
const getAllSubCategory = asyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.find()
        res.status(200).json(subcategory)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete ProductFor
// @route   DELETE /api/v1/Inventory-Type/:id
// @access  Public
const deleteSubCategory = asyncHandler(async (req, res) => {
    const subcategory = await SubCategory.findById(req.params.id)
  
    if (subcategory) {
      await subcategory.remove()
      res.json({ message: 'SubCategory removed' })
    } else {
      res.status(404)
      throw new Error('SubCategory not found')
    }
})

module.exports = {
  addCategory,
  getCategory,
  deleteCategory,
  addSubCategory,
  getAllSubCategory,
  deleteSubCategory
}
