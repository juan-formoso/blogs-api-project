const jwt = require('jsonwebtoken');
const JoiSchema = require('../helpers/schemas');
const userModel = require('../models/user');
require('dotenv').config();

const loginValidation = async (req, res, next) => {
  const { error } = JoiSchema.loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      status: 400,
      error: 'Invalid fields',
    });
  }
  next();
};

const login = async ({ email, password }) => {
  const user = await loginValidation({ email, password });
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
