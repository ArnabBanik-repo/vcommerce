const express = require("express");
const cookieParser = require('cookie-parser');
const user = require('./routes/user');
const product = require('./routes/product');
const globalErrorHandler = require('./controllers/error');
const AppError = require('./utils/AppError');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', user);
app.use('/api/v1/products', product);

app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
