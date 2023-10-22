const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minLength: 3
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
      enum: ['book', 'cycle', 'household', 'misc'],
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
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", schema);
module.exports = Product;
