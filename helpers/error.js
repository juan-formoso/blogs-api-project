module.exports = (err, res) => {
/*   const status = err.status || 500;
  const message = err.message */
  res.status(500).json({ message: err.message });
};