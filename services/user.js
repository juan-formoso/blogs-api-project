const jwt = require('jsonwebtoken');
const { userSchema } = require('../helpers/schemas');
const { User } = require('../models');
require('dotenv').config();

const validateUser = async ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return { code: 400, message: error.details[0].message };
  }
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) {
    return { code: 409, message: 'User already registered' };
  }
  return {};
};

const createUser = async ({ displayName, email, password, image }) => {
  const { code, message } = await validateUser({ displayName, email, password, image });
  if (code) {
    return { code, message };
  }
  const newUser = await User.create({ displayName, email, password, image });
  const { password: _, ...userCreated } = newUser.dataValues;
  const token = jwt.sign(userCreated, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60h',
  });
  return { token };
};

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user || { code: 404, message: 'User does not exist' };
};

const deleteUser = async (token) => {
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  const deleteBloPost = await User.destroy({ where: { id } });
  return deleteBloPost;
};

module.exports = { deleteUser, createUser, getUsers, getUserById };
