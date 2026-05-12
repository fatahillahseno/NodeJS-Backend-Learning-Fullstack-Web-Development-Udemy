const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");

async function deleteTaskProvider(req, res) {
  const validatedTaskData = matchedData(req);
  try {
    const deletedTask = await Task.deleteOne({
      _id: validatedTaskData["_id"],
      user: req.user.sub,
    });

    if (deletedTask.deletedCount === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message:
          "Task is not found Or you are not authorized to delete this task",
      });
    }

    return res
      .status(StatusCodes.OK)
      .json({ ...deletedTask, message: "Task deleted succesfully" });
  } catch (error) {
    errorLogger(`Error deleting the task: ${error.message}`, req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later",
    });
  }
}

module.exports = deleteTaskProvider;
