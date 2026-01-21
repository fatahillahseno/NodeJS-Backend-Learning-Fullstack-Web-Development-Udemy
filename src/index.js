const express = require("express"); // a function that give you ability to make an app, when it's invoked
const app = express(); // an app object / an express app

// that app need to be passed a port number to listen port number in machine
const port = 3001; // range port number: 0 to 65535, http://localhost:3001/

// get route
app.get("/:category", (req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Params:", req.params);
  console.log("Request Query:", req.query);
  console.log("Request Header:", req.headers);
  console.log("Request Method:", req.method);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
