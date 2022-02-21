const rescue = require('express-rescue');
const loginServices = require('../services/login');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const userLogin = await loginServices.login({ email, password });
  if (userLogin.code) {
    return res.status(userLogin.code).json({ message: userLogin.message });
  }
  return res.status(200).json(userLogin);
});

module.exports = { login };
