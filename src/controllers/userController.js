// controllers/userController.js
const userService = require('../services/userService');

const getUsers = async (req, res) => {
  return await userService.getAllUsers();
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  return await userService.createUser(name, email);
};

module.exports = {
  getUsers,
  addUser,
};
