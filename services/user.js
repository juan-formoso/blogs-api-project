const jwt = require('jsonwebtoken');
const JoiSchema = require('../helpers/schemas');
const userModel = require('../models/user');
require('dotenv').config();

const userValidation = async ({ displayName, email, password, image }) => {
  const { error } = JoiSchema.userSchema.validate({ displayName, email, password, image });
  if (error) return { code: 400, message: error.details[0].message };
  const ifEmailExists = await userModel.findOne({ where: { email } });
  if (ifEmailExists) return { code: 409, message: 'User already registered' };
  return {};
};

const createUser = async ({ displayName, email, password, image }) => {
  const { code, message } = await userValidation({ displayName, email, password, image });
  if (code) return { code, message };
  const user = await userModel.create({ displayName, email, password, image });
  const { password: _, ...userCreated } = user.dataValues;
  const token = jwt.sign(userCreated, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60h',
  });
  return { token };
};

const getAllUsers = async () => {
  const allUsers = await userModel.findAll();
  return allUsers;
};

const getUserById = async (id) => {
  const user = await userModel.findByPk(id);
  return user || { code: 404, message: 'User does not exist' };
};

const deleteUser = async (token) => {
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  const deletedUser = await userModel.destroy({ where: { id } });
  return deletedUser;
};

module.exports = {
  deleteUser,
  createUser,
  getAllUsers,
  getUserById,
};
