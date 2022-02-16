const rescue = require('express-rescue');
const loginServices = require('../services/login');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await loginServices.login({ email, password });
  if (loginUser.code) return res.status(loginUser.code).json({ message: loginUser.message });
  return res.status(200).json(loginUser);
});

module.exports = { login };
