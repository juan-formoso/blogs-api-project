const jwt = require('jsonwebtoken');
const { loginSchema } = require('../helpers/schemas');
const { User } = require('../models');
require('dotenv').config();

const validateLogin = async ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return { code: 400, message: error.details[0].message };
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { code: 400, message: 'Invalid fields' };
  }
  return user;
};

const login = async ({ email, password }) => {
  const user = await validateLogin({ email, password });
  if (user.code) {
    return { code: user.code, message: user.message };
  }
  const { id } = user.dataValues;
  const token = jwt.sign({ email: user.email, id }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '60h',
  });
  return { token };
};

module.exports = { login };
