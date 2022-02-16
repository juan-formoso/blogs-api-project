module.exports = (err, res) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  res.status(status).json({ message });
};
