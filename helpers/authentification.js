const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, err, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  if (err) {
    return res.status(401).json({ error: 'Expired or invalid token' });
  }
  jwt.verify(token, process.env.JWT_SECRET);
  next();
};
