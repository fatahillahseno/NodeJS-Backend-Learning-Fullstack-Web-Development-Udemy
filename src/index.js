const express = require("express");
const app = express();
const port = 3001;
const tasksRouter = require("./tasks/tasks.router.js");

// middleware
const middleWare = function (req, res, next) {
  req.info = {
    appname: "Tasks Manager",
    author: "Sense",
  };
  next();
};

app.use(middleWare);

// defines routes
app.use("/", tasksRouter);

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
