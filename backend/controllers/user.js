const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const catchAsync = require('../utils/catchAsync');
const { listUsers, listUser, createUser, removeUser, modifyUser, listCompleteUser, modifyPassword, correctPassword, changedPasswordAfter } = require("../mysql");
const AppError = require('../utils/AppError');
const Product = require('../models/product');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, status, res) => {
  const token = signToken(user.roll);

  user.password = undefined;
  user.password_changed_at = undefined;
  user.role = undefined;
  
  let cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'PRODUCTION') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  res.status(status).json({
    status: 'success',
    user,
  });
};

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await listUsers();
  res.status(200).json({
    status: 'success',
    data: users,
  })
})

exports.getUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await listUser(id);
  if (!user) return next(new AppError("No user with that ID", 404));

  const products = await Product.find({seller: req.params.id});
  user.products = products;
  res.status(200).json({
    status: 'success',
    data: user,
  })
})

exports.getMe = catchAsync(async (req, _, next) => {
  req.params.id = req.user.roll;
  next();
});

exports.register = catchAsync(async (req, res, _) => {
  const { first_name, last_name, roll, email, phone, address, password } = req.body;
  const user = await createUser(first_name, last_name, roll, email, phone, address, password);
  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { id, password } = req.body;
  if (!id || !password)
    return next(new AppError('ID and Password required', 400));

  const user = await listCompleteUser(id);
  if (!user || !(await correctPassword(password, user.password)))
    return next(new AppError('Incorrect ID or password entered', 401));

  sendToken(user, 200, res);
});

exports.logout = catchAsync(async (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 10 * 1000),
  });
  res.status(200).json({
    status: 'success',
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token)
    return next(
      new AppError('You are not logged in. Please log in to continue', 401),
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_KEY);
  const user = await listCompleteUser(decoded.id);
  if (!user) return next(new AppError('User no longer exists', 401));
  if (changedPasswordAfter(user.password_changed_at, decoded.iat))
    return next(
      new AppError('User has changed password. Please log in again.', 401),
    );

  req.user = user;
  next();
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError(
          'You do not have necessary permission to perform that action',
          403,
        ),
      );
    next();
  };

exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const t = await removeUser(id);
  if(t === 0)
    return res.status(400).json({
    status: 'fail',
    msg: 'some error occurred, try that again'
  });

  await Product.deleteMany({seller: req.params.id});
  res.status(200).json({
    status: 'success',
  }); 
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  req.params.id = req.user.roll;
  next();
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const id = req.user.roll;

  let {phone, address} = req.body;
  if(!phone) phone = req.user.phone;
  if(!address) address = req.user.address;

  const ans = await modifyUser(id, phone, address);
  res.status(200).json({
    status: 'success',
    data: ans,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const id = req.user.roll;
  const user = await listCompleteUser(id);

  if (!await correctPassword(req.body.password, user.password))
    return next(new AppError('Incorrect password entered', 401));

  const ans = await modifyPassword(id, req.body.newPassword);

  res.status(200).json({
    status: "success",
    data: ans
  });
});

