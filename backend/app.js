const express = require("express");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const cors = require('cors');
const user = require('./routes/user');
const product = require('./routes/product');
const globalErrorHandler = require('./controllers/error');
const AppError = require('./utils/AppError');

const corsOptions = {
  origin: ['http://127.0.0.1:3000', process.env.FRONTEND_URI],
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

// Middleware stack
app.use(express.static('public'))
app.use(cors(corsOptions));
app.use(helmet());
const limiter = rateLimit({
  max: 200,
  window: 60 * 60 * 1000,
  message: 'Too many requests from this IP! Please try again in one hour.',
});
app.use('/api', limiter);
if (process.env.NODE_ENV === 'DEVELOPMENT') app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xssClean());
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    msg: 'Welcome wanderer, try visiting /api/v1/users',
  });
});

// Routes
app.use('/api/v1/users', user);
app.use('/api/v1/products', product);

app.all('*', (req, res, next) => {
  const err = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
