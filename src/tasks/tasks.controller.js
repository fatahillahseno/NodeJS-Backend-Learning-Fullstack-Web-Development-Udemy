const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const Task = require("./task.schema.js");

function handleGetTasks(req, res) {
  let response = [
    {
      title: "Title of the Task",
      date: "2026-01-27T08:12:00.000Z",
      description:
        "Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task",
      priority: "normal",
      status: "todo",
    },
    {
      title: "Title of the Task 2",
      date: "2026-01-27T08:12:00.000Z",
      description:
        "Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task",
      priority: "normal",
      status: "todo",
    },
    {
      title: "Title of the Task 3",
      date: "2026-01-27T08:12:00.000Z",
      description:
        "Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task Description of the Task",
      priority: "normal",
      status: "todo",
    },
  ];
  res.status(StatusCodes.OK).json(response);
}

async function handlePostTasks(req, res) {
  // buat task
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
  });

  // tunggu sampai data tersimpan ke database
  await task.save();

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
