const Product = require('../models/product');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.deleteProduct = catchAsync(async (req, res, next) => {
    const doc = await Product.findByIdAndDelete(req.params.id, {
      returnOriginal: true,
    });
    if (!doc) return next(new AppError('No document with that ID exists', 404));

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateProduct = catchAsync(async (req, res, next) => {
    const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) return next(new AppError('No document with that ID', 404));

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getProduct = catchAsync(async (req, res, next) => {
    const doc = await Product.findById(req.params.id);
    if (!doc) return next(new AppError('No document with that ID', 404));

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });

exports.getProducts = catchAsync(async (req, res, next) => {
    const docs = await Product.find({});
    res.status(200).json({
      status: 'success',
      data: { docs },
      count: docs.length,
    });
  });

exports.addProduct = catchAsync(async (req, res, next) => {
    const doc = await Product.create(req.body);

    res.status(200).json({
      status: 'success',
      data: doc,
    });
  });
