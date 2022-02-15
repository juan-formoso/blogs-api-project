const rescue = require('express-rescue');
const userServices = require('../services/user');

const createUser = rescue(async (req, res) => {
  const user = await userServices.createUser(req.body);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  res.status(201).json(user);
});

const getUsers = rescue(async (req, res) => {
  const users = await userServices.getUsers();
  res.status(200).json(users);
});

const getUserById = rescue(async (req, res) => {
  const user = await userServices.getUserById(req.params.id);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  res.status(200).json(user);
});

const deleteUser = rescue(async (req, res) => {
  const { authorization } = req.headers;
  await userServices.deleteUser(authorization);
  return res.status(204).end();
});

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
