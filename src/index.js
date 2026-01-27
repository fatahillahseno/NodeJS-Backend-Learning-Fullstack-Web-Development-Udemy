const express = require("express");
const app = express();
const port = 3001;

// route
const tasksRouter = require("./tasks/tasks.router.js");

// untuk logging
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// middleware untuk mencatat logging request, saat endpoints diakses
let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a",
  },
);
app.use(morgan("combined", { stream: accessLogStream }));

// middleware untuk membaca json request
app.use(express.json());

// defines routes
app.use("/", tasksRouter);

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
