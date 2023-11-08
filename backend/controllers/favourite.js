const { makeFavourite, deleteFavourite, listFavourites } = require("../mysql");
const Product = require('../models/product');
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.createFavourite = catchAsync(async(req, res, next) => {
  const user_id = req.user.roll;
  const prod_id = req.params.id;

  const prod = await Product.findById(prod_id);
  if(!prod)
    return next(new AppError("No such product exists", 400));

  if(prod.seller === user_id)
    return next(new AppError("User cannot favourite his own product", 400));

  const t = await makeFavourite(user_id, prod_id);
  t === 1 ? 
    res.status(200).json({
      status: 'success',
    }) : res.status(400).json({
      status: 'fail',
      msg: 'Couldn\'t add to favourites, try again'});
});

exports.removeFavourite = catchAsync(async(req, res, next) => {
  const user_id = req.user.roll;
  const prod_id = req.params.id;

  const prod = await Product.findById(prod_id);
  if(!prod)
    return next(new AppError("No such product exists", 400));

  if(prod.seller === user_id)
    return next(new AppError("User cannot favourite his own product", 400));

  const t = await deleteFavourite(user_id, prod_id);
  t === 1 ? 
    res.status(200).json({
      status: 'success',
    }) : res.status(400).json({
      status: 'fail',
      msg: 'Couldn\'t remove favourite, try again'});
});

exports.getFavourites = catchAsync(async (req, res, next) => {
  const user_id = req.user.roll;
  const t = await listFavourites(user_id);
  let product_ids = [];
  t.forEach(e => product_ids.push(e.product_id));
  const products = await Product.find({_id: {$in: product_ids}});
  res.status(200).json({
    status: 'success',
    data: {products},
  });
});
