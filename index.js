require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(console.log('Mongoose connected successfully ✅'));

const port = process.env.PORT || 5000;
const app = require('./app');

app.listen(port, () => {
  console.log('Server running');
});
