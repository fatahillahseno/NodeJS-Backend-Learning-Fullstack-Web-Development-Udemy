const express = require("express");

const tasksRouter = express.Router();

tasksRouter.get("/tasks", (req, res) => {
  return res.send("Hello World");
});

tasksRouter.post("/tasks", (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  return res.send("Created Tasks");
});

module.exports = tasksRouter;
