const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");

const tasksRouter = express.Router();
const tasksController = require("./tasks.controller.js");
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTask.validator.js");

tasksRouter.get("/tasks", getTasksValidator, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handleGetTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.post("/tasks", createTaskValidator, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handlePostTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.patch("/tasks", tasksController.handlePatchTasks);

tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

module.exports = tasksRouter;
