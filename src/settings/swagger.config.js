const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Task Management API",
      version: "0.1.0",
      description:
        "API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Sense",
        url: "https://github.com/sense",
        email: "sense@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3100",
      },
    ],
  },
  apis: [path.join(__dirname, "..", "**/*.js")],
};

const swaggerSpecs = swaggerJsdoc(options);

module.exports = swaggerSpecs;
