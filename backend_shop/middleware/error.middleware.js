const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 404;
  const message = error.message || 'error';
  res.status(400).send({
    errors: [{
      statusCode,
      message
    }]
  });
}

module.exports = errorHandler;
