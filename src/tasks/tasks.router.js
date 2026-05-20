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


/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth: 
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    parameters: 
 *      - in : query
 *        name: limit
 *        schema: 
 *          type: integer
 *          default: 10
 *        description: The number of tasks needed in a single response
 *      - in : query
 *        name: page
 *        schema: 
 *          type: integer
 *          default: 1
 *        description: The page number of tasks response
 *      - in : query
 *        name: order
 *        schema: 
 *          type: string
 *          default: asc
 *          enum: [asc, desc]
 *        description: The order of the tasks   
 *    responses:
 *      200: 
 *        description: Task fetched successfully 
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: OK
 *              data: 
 *                - _id: 69eb3040377923d16aea10e4
 *                  title: Exercise
 *                  description: Calisthenics Work Out
 *                  status: todo
 *                  priority: normal
 *                  dueDate: 2026-05-19T04:16:44+00:00
 *      401:
 *        description: Not Authorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error: 
 *                message: You are not authorized to perform this request
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error: 
 *                message: Please Login again, invalid token 
 */

tasksRouter.get(
  "/tasks",
  [authenticateToken, getTasksValidator, handleValidationErrorMiddleware],
  tasksController.handleGetTasks,
);

/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth: 
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    requestBody: 
 *      required: true
 *      content: 
 *        application/json: 
 *          schema: 
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      201: 
 *        description: Task created successfully 
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 201
 *              message: Created
 *              data: 
 *                _id: 69eb3040377923d16aea10e4
 *                title: Exercise
 *                description: Calisthenics Work Out
 *                status: todo
 *                priority: normal
 *                dueDate: 2026-05-19T04:16:44+00:00
 *      401:
 *        description: Not Authorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error: 
 *                message: You are not authorized to perform this request
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error: 
 *                message: Please Login again, invalid token 
 */

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
