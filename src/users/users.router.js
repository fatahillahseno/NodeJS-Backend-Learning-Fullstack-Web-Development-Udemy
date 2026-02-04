const express = require("express");

const usersRouter = express.Router();

const usersController = require("./users.controller.js");

usersRouter.post("/create", usersController.handleCreateUser);

module.exports = usersRouter;
