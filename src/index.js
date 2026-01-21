const express = require("express"); // a function that give you ability to make an app, when it's invoked
const app = express(); // an app object / an express app

// that app need to be passed a port number to listen port number in machine
const port = 3001; // range port number: 0 to 65535, http://localhost:3001/

// when we declare url paramaters, we use colon ( : ) to start with, ex: /:category
app.get("/users/:role/", (req, res) => {
  console.log("Request Params:", req.params);
  console.log("Request Query:", req.query);
  res.send("Hello World!");
});

// jika ingin membuat request namun url parameters nya bersifat opsional/sementara
// gunakan question mark ( ? ),ex: /:users?
app.get("/tasks/:users?", (req, res) => {
  console.log("Request Params:", req.params);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
