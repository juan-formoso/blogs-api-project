const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    next();
  } catch (_) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
