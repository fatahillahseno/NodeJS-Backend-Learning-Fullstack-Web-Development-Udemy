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
  res.status(200).json(response);
}
function handlePostTasks(req, res) {
  res.send("POST Task Controller");
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
