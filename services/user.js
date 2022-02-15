const jwt = require('jsonwebtoken');
const JoiSchema = require('../helpers/schemas');
const userModel = require('../models/user');
require('dotenv').config();

const userValidation = async (req, res, next) => {
  const { error } = JoiSchema.userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  const ifEmailExists = await userModel.findOne({ email: req.body.email });
  if (ifEmailExists) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const createUser = async (req, res) => {
  const { code, message } = await userValidation(req, res);
  if (code) {
    return res.status(code).json({
      message,
    });
  }
  const user = await userModel.create(req.body);
  const { password: _, ...userData } = user.dataValues;
  const token = jwt.sign(userData, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60h',
  });
  return { token };
};

const getAllUsers = async (_req, _res) => {
  const allUsers = await userModel.findAll();
  return allUsers;
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findOne({ where: { id } });
  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
  return user;
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findOne({ where: { id } });
  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
  await user.destroy();
  return res.status(200).json({
    message: 'User deleted successfully',
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
