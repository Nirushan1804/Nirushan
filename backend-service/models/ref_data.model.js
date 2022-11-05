const mongoose = require("mongoose");

const CategoryTypeSchema = new mongoose.Schema(
  {
    //Product Category Men, Women, Kids
    Category: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret){
        ret.id = ret._id
        delete ret._id
      }
    }
  }
);

const SubCategorySchema = new mongoose.Schema(
  {
    Category:{
      type: String,
      required: true,
    },
    //Men, Women, Kids
    SubCategory: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret){
        ret.id = ret._id
        delete ret._id
      }
    }
  }
);

const Category = mongoose.model("Category", CategoryTypeSchema);
const SubCategory = mongoose.model("SubCategory", SubCategorySchema);

module.exports = { Category, SubCategory };
// module.exports = ProductFor;
