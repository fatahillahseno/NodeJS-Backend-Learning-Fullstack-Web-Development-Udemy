function handleGetTasks(req, res) {
  res.send("GET Task Controller");
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
