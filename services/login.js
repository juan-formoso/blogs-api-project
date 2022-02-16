const jwt = require('jsonwebtoken');
const JoiSchema = require('../helpers/schemas');
const userModel = require('../models/user');
require('dotenv').config();

const loginValidation = async ({ email, password }) => {
  const { error } = JoiSchema.loginSchema.validate({ email, password });
  if (error) return { code: 400, message: error.details[0].message };
  const user = await userModel.findOne({ where: { email } });
  if (!user) return { code: 400, message: 'Invalid fields' };
  return user;
};

const login = async ({ email, password }) => {
  const user = await loginValidation({ email, password });
  if (user.code) return { code: user.code, message: user.message };
  const { id } = user.dataValues;
  const token = jwt.sign({ email: user.email, id }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60h',
  });
  return { token };
};

module.exports = { login };
