const express = require("express");
const usersRouter = express.Router();
const usersController = require("./users.controller.js");
const createUserValidator = require("./validators/createUser.validator.js");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

usersRouter.post("/create", createUserValidator, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return usersController.handleCreateUser(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

module.exports = usersRouter;
