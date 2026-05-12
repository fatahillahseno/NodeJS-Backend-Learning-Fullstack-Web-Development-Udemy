const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const handleValidatioinErrorMiddleware = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return next();
  }

  return res.status(StatusCodes.BAD_REQUEST).json(result.array());
};

module.exports = handleValidatioinErrorMiddleware;
