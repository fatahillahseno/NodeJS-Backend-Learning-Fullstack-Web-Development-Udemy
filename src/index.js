const express = require("express");
const app = express();
const port = 3001;
const tasksRouter = require("./tasks/tasks.router.js");

app.use("/", tasksRouter);

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
