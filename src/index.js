const express = require("express");
const app = express();
const port = 3001;

// security
const cors = require("cors");

// route
const tasksRouter = require("./tasks/tasks.router.js");

// 1. untuk logging
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

// 2. cors
// jika pada production harus menggunakan code di bawah ini
// const corsOptions = {
//   origin: ["http://localhost:3000", "http://127.0.0.1:5500"],
// };
// app.use(cors(corsOptions));
app.use(cors()); // membiarkan semua domain mengakses api

// 3. JSON Parser
// middleware untuk membaca json request
app.use(express.json());

// 4. defines routes
app.use("/", tasksRouter);

// 5. App listen port
app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
