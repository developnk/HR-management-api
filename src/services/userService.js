// services/userService.js
const pool = require('../config/db');

const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

const createUser = async (name, email) => {
  const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  return { id: result.insertId, name, email };
};

module.exports = {
  getAllUsers,
  createUser,
};
