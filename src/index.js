const express = require("express"); // a function that give you ability to make an app, when it's invoked
const app = express(); // an app object / an express app

// that app need to be passed a port number to listen port number in machine
const port = 3001; // range port number: 0 to 65535, http://localhost:3001/

// GET route
app.get("/", (req, res) => {
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

// POST route
app.post("/", (req, res) => {
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

// PATCH route
app.patch("/", (req, res) => {
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

// PUT route
app.put("/", (req, res) => {
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

// DELETE route
app.delete("/", (req, res) => {
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
