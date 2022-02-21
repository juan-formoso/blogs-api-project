<<<<<<< HEAD
module.exports = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  res.status(status).json({ message });
};
=======
module.exports = (err, res) => {
/*   const status = err.status || 500;
  const message = err.message */
  res.status(500).json({ message: err.message });
};
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
