const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTaskProvider = require("./providers/getTasks.provider.js");

async function handleGetTasks(req, res) {
  const tasks = await getTaskProvider(req);
  res.status(StatusCodes.OK).json(tasks);
}

async function handlePostTasks(req, res) {
  // membuat task dari hasil createTaskProvider
  const task = await createTaskProvider(req);
  // kirim response ke client
  res.status(StatusCodes.CREATED).json(task);
}

function handlePatchTasks(req, res) {
  res.send("PATCH Task Controller");
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
