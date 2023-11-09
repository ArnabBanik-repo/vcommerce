const multer = require("multer");
const sharp = require("sharp");
const Product = require('../models/product');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const { listUser } = require("../mysql");

exports.getProducts = catchAsync(async (req, res, next) => {
  req.query.sort = "-createdAt";
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paginate();
  let products = await features.query;

  res.status(200).json({
    status: "success",
    data: { products },
    count: products.length,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) return next(new AppError("No product with that ID", 404));

  const seller = await listUser(product.seller);
  product._doc.seller = seller;

  res.status(200).json({
    status: "success",
    data: product,
  });
});


exports.addProduct = catchAsync(async (req, res, next) => {
  if (!req.body.seller) req.body.seller = req.user.roll;
  if (req.file) req.body.photo = req.file.filename;
  let product = await Product.create(req.body);

  product.seller = req.user;
  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if(!product)
    return next(new AppError("No such product exists"));
  
  if (product.seller.toString() !== req.user.roll) {
    return next(
      new AppError("You are not authorized to update that product", 401),
    );
  }

  const freshProduct = await Product.findByIdAndUpdate(product._id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: freshProduct,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product.seller.toString() !== req.user.roll) {
    return next(
      new AppError("You are not authorized to delete that post", 401),
    );
  }

  await Product.findByIdAndDelete(product._id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteProductAdmin = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new AppError("Not an image.", 400), false);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPostPhoto = upload.single("photo");

exports.resizePhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.roll}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(1500, 1500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/products/${req.file.filename}`);
  next();
});
