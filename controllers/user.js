const rescue = require('express-rescue');
const userServices = require('../services/user');

const create = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userServices.createUser({ displayName, email, password, image });
  if (newUser.code) {
    return res.status(newUser.code).json({ message: newUser.message });
  }
  return res.status(201).json(newUser);
});

const getUsers = rescue(async (_req, res) => {
  const users = await userServices.getUsers();
  return res.status(200).json(users);
});

const getUserById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUserById(id);
  if (user.code) {
    return res.status(user.code).json({ message: user.message });
  }
  return res.status(200).json(user);
});

const deleteUser = rescue(async (req, res) => {
  const { authorization } = req.headers;
  await userServices.deleteUser(authorization);
  return res.status(204).end();
});

module.exports = { create, getUsers, getUserById, deleteUser };
