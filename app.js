const express = require("express");
const user = require('./routes/user');
const globalErrorHandler = require('./controllers/error');
const AppError = require('./utils/AppError');

const app = express();
app.use(express.json());

app.use('/api/v1/users', user);

app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
