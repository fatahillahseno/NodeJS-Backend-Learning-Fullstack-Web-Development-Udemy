// set up express app
const express = require("express");
const app = express();
const port = 3001;

// import status code
const { StatusCodes } = require("http-status-codes");

// import security
const cors = require("cors");

// import route
const tasksRouter = require("./tasks/tasks.router.js");
const authRouter = require("./auth/auth.router.js");
const usersRouter = require("./users/users.router.js");

// import middleware
const responseFormatter = require("./middleware/responseFormatter.middleware.js");

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

// 4. Response Formatter Middleware
// middleware untuk memformat response
// menempatkan di setelah semua middleware lain tetapi sebelum route
app.use(responseFormatter);

// 5. defines routes
app.use("/", tasksRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// 6. default route untuk endpoints yang tidak ditemukan
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json(null);
});

// 7. App listen port
app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
