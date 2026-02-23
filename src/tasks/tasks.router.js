const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { body, validationResult } = require("express-validator");

const tasksRouter = express.Router();
const tasksController = require("./tasks.controller.js");

tasksRouter.get("/tasks", tasksController.handleGetTasks);

tasksRouter.post(
  "/tasks",
  [
    body("title", "The title can not be empty").notEmpty(),
    body("title", "The title must be a string").isString(),
    body("dueDate", "The dueDate needs to be a valid ISO8601 string")
      .notEmpty()
      .isISO8601(),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return tasksController.handlePostTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  },
);

tasksRouter.patch("/tasks", tasksController.handlePatchTasks);

tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

module.exports = tasksRouter;
