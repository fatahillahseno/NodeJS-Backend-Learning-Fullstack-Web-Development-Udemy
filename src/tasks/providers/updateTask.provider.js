const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");

async function updateTaskProvider(req, res) {
  const validatedTaskData = matchedData(req);
  try {
    const task = await Task.findById(validatedTaskData._id);

    if (!task) {
      return res.status(StatusCodes.NOT_FOUND).json({
        reason: "Task is not found",
      });
    }
    task.title = validatedTaskData.title || task.title;
    task.description = validatedTaskData.description || task.description;
    task.dueDate = validatedTaskData.dueDate || task.dueDate;
    task.status = validatedTaskData.status || task.status;
    task.priority = validatedTaskData.priority || task.priority;

    await task.save();

    return res.status(StatusCodes.OK).json(task);
  } catch (error) {
    errorLogger(`Error updating the task: ${error.message}`, req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later",
    });
  }
}

module.exports = updateTaskProvider;
