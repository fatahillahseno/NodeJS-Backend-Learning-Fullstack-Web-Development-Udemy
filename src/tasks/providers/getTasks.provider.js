const Task = require("../task.schema.js");

async function getTasksProvider(req) {
  return await Task.find();
}

module.exports = getTasksProvider;
