module.exports = (err, req, res, _next) => {
  console.log(err);
  res.status(500).json({ message: 'Internal server error' });
};
