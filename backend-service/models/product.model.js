const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    Brand: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    //Men, Women, Kids
    Category: {
      type: String,
      required: true,
    },
    //Blazers, Sunglasses
    SubCategory: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
