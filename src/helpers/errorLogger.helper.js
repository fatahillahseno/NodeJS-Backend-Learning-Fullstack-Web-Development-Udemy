const logger = require("../helpers/winston.helper.js");

function errorLogger(message, req, error) {
  logger.error(message, {
    metadata: {
      errorCode: error.code,
      errorName: error.name,
      method: error.method,
      url: error.originalUrl,
      body: error.body,
      query: error.query,
      params: error.params,
      error: error,
    },
  });
}

module.exports = errorLogger;
