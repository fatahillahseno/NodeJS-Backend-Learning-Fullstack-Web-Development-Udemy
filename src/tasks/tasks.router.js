const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");

const tasksRouter = express.Router();
const tasksController = require("./tasks.controller.js");

//middleware
const authenticateToken = require("../middleware/authenticateToken.middleware.js");
const handleValidationErrorMiddleware = require("../middleware/handleValidationError.middleware.js");

// validators
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTasks.validator.js");
const updateTaskValidator = require("./validators/updateTask.validator.js");
const deleteTaskValidator = require("./validators/deleteTask.validator.js");

tasksRouter.get(
  "/tasks",
  [authenticateToken, getTasksValidator, handleValidationErrorMiddleware],
  tasksController.handleGetTasks,
);

tasksRouter.post(
  "/tasks",
  [authenticateToken, createTaskValidator],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return tasksController.handlePostTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  },
);

tasksRouter.patch(
  "/tasks",
  [updateTaskValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return tasksController.handlePatchTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  },
);

tasksRouter.delete(
  "/tasks",
  [deleteTaskValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return tasksController.handleDeleteTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  },
);

module.exports = tasksRouter;
