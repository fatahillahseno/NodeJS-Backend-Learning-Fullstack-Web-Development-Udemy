const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTasksProvider = require("./providers/getTasks.provider.js");
const updateTaskProvider = require("./providers/updateTask.provider.js");

async function handleGetTasks(req, res) {
  const tasks = await getTasksProvider(req);
  res.status(StatusCodes.OK).json(tasks);
}

async function handlePostTasks(req, res) {
  // membuat task dari hasil createTaskProvider
  const task = await createTaskProvider(req);
  // kirim response ke client
  res.status(StatusCodes.CREATED).json(task);
}

async function handlePatchTasks(req, res) {
  const task = await updateTaskProvider(req);
  res.status(StatusCodes.OK).json(task);
}

function handleDeleteTasks(req, res) {
  res.send("DELETE Task Controller");
}

module.exports = {
  handleGetTasks,
  handlePostTasks,
  handlePatchTasks,
  handleDeleteTasks,
};
