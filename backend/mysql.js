const mysql = require("mysql2");
const bcrypt = require('bcrypt');

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  })
  .promise();

exports.correctPassword = async (pass, origPass) =>
  await bcrypt.compare(pass, origPass);

exports.changedPasswordAfter = function(userTime, jwtTime) {
  if (userTime === undefined) return false;

  const pwdTime = new Date(userTime);
  const iatTime = new Date(jwtTime * 1000);
  return pwdTime > iatTime;
};

exports.listUsers = async () => {
  const [rows] = await pool.query("SELECT first_name, last_name, roll, email, phone, address FROM user");
  return rows;
};

exports.listUser = async (id) => {
  const [rows] = await pool.query("SELECT first_name, last_name, roll, email, phone, address FROM user WHERE roll=?", [id]);
  return rows[0];
};

exports.listCompleteUser = async (id) => {
  const [rows] = await pool.query("SELECT * FROM user WHERE roll=?", [id]);
  return rows[0];
};

exports.createUser = async (
  first_name,
  last_name,
  roll,
  email,
  phone,
  address,
  password,
) => {
  const hash_pass = await bcrypt.hash(password, 12);
  first_name = first_name.toLowerCase();
  last_name = last_name.toLowerCase();
  address = address.toLowerCase();
  roll = roll.toLowerCase();

  await pool.query("INSERT INTO user VALUES(?, ?, ?, ?, ?, ?, ?, null, 'user')", [
    first_name,
    last_name,
    roll,
    email,
    phone,
    address,
    hash_pass,
  ]);
  return this.listUser(roll);
};

exports.removeUser = async (id) => {
  const res = await pool.query(`DELETE FROM user WHERE roll=?`, [id]);
  return res;
};

exports.modifyUser = async (id, phone, address) => {
  address = address.toLowerCase();
  await pool.query("UPDATE user SET phone=?, address=? WHERE roll=?", [phone, address, id]);
  return this.listUser(id);
};

exports.modifyPassword = async (id, password) => {
  const hash_pass = await bcrypt.hash(password, 12);
  await pool.query("UPDATE user SET password = ?, password_changed_at = CURRENT_TIMESTAMP() WHERE roll = ?", [hash_pass, id]);
  const user = await this.listUser(id);
  return user;
}
