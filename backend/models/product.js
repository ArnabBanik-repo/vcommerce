const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3
    },
    photo:{
      type:String,
      required: [true, 'Product image must be uploaded'],
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
      enum: ['book', 'cycle', 'household', 'misc','garments','accessory'],
      required: true,
    },
    condition: {
      type: String,
      enum: ['new', 'almost new', 'fairly old', 'very old'],
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seller: {
      type: String,
      required: [true, 'A product must have a seller'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const Product = mongoose.model("Product", schema);
module.exports = Product;
