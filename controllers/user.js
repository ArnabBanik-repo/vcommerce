const catchAsync = require('../utils/catchAsync');
const { listUsers, listUser, createUser, removeUser, modifyUser } = require("../mysql");
const AppError = require('../utils/AppError');

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

  res.status(200).json({
    status: 'success',
    data: user,
  })
})

exports.addUser = catchAsync(async (req, res, next) => {
  const { first_name, last_name, roll, email, phone, address, password } = req.body;
  const user = await createUser(first_name, last_name, roll, email, phone, address, password);
  res.status(200).json({
    status: 'success',
    data: user,
  });
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await listUser(id);
  if(!user) return next(new AppError("No user with that ID", 404));

  await removeUser(id);

  res.status(200).json({
    status: 'success',
  })
})

exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await listUser(id);
  if(!user) return next(new AppError("No user with that ID", 404));

  let {phone, address} = req.body;
  if(!phone) phone = user.phone;
  if(!address) address = user.address;

  const ans = await modifyUser(id, phone, address);
  res.status(200).json({
    status: 'success',
    data: ans,
  });
});
