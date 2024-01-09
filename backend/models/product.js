const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    photo:{
      type:String,
      required: [true, 'Product image must be uploaded'],
    },
    desc: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 500
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
      maxLength: 20
    },
    price: {
      type: Number,
      required: true,
      min: [10, 'Price of the item should be atleast Rs 10'],
      max: [100000, 'Maximum listing value is 100000']
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
