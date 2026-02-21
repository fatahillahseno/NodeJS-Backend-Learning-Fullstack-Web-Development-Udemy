const Task = require("../task.schema.js");

async function deleteTaskProvider(req) {
  return await Task.deleteOne({ _id: req.body["_id"] });
}

module.exports = deleteTaskProvider;
