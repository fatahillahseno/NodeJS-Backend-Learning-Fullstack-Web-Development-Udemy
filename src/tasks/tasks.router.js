const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");

const tasksRouter = express.Router();
const tasksController = require("./tasks.controller.js");

// validators
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTasks.validator.js");
const updateTaskValidator = require("./validators/updateTask.validator.js");

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

tasksRouter.patch("/tasks", updateTaskValidator, (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handlePatchTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

module.exports = tasksRouter;
