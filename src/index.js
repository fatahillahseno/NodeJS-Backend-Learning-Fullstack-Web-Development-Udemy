const express = require("express"); // a function that give you ability to make an app, when it's invoked
const app = express(); // an app object / an express app

// that app need to be passed a port number to listen port number in machine
const port = 3001; // range port number: 0 to 65535, http://localhost:3001/

// get route
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
