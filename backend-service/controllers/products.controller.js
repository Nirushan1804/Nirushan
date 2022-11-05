const asyncHandler = require('express-async-handler');
const Products = require("../models/product.model");


// @desc    Create new Products
// @route   POST /api/v1/products
// @access  Public
const addProducts = asyncHandler(async (req, res) => {
    const products = await new Products(req.body);

    try {
      const savedProducts = await products.save();
      res.status(201).json(savedProducts);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get products by ID
// @route   GET /api/v1/products/:id
// @access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const products = await Products.findById(req.params.id)

  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

// @desc    Get products by ID
// @route   GET /api/v1/products/:id
// @access  Public
const getInventoryByInventoryType = asyncHandler(async (req, res) => {
    const InventoryType = await Products.findById(req.query.Inventory_Type);
    console.log("InventoryType : ",req.query.Inventory_Type);

    if (!InventoryType) {
        res.status(404).json({ error: 'Products request' })
    }

    const products = await Products.find({InventoryType: req.query.Inventory_Type})
        .populate("InventoryType", "InventoryType")
        .populate("ProductFor", "ProductFor");
  
    if (products) {
    //   res.json(products)
        res.json(products.map(products => products.toJSON()))
    } else {
      res.status(404)
      throw new Error('Products not found')
    }
})

// @desc    Update products
// @route   PUT /api/v1/products/:id
// @access  Public
const updateProducts = asyncHandler(async (req, res) => {
  try {
    const updateProducts = await Products.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ProductName: req.body.ProductName,
          Description: req.body.Description,
          price: req.body.price,
          Brand: req.body.Brand,
          Image: req.body.Image,
          Category: req.body.Category,
          SubCategory: req.body.SubCategory,
          isAvailable: req.body.isAvailable,
        },
      }
    );
    res.json(updateProducts);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Products
// @route   GET /api/v1/products
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete promo
// @route   DELETE /api/v1/products/:id
// @access  Public
const deleteProducts = asyncHandler(async (req, res) => {
    const products = await Products.findById(req.params.id)
  
    if (products) {
      await products.remove()
      res.json({ message: 'Products removed' })
    } else {
      res.status(404)
      throw new Error('Products not found')
    }
})

module.exports = {
  addProducts,
  getProductsById,
  updateProducts,
  getAllProducts,
  deleteProducts,
  getInventoryByInventoryType
}
