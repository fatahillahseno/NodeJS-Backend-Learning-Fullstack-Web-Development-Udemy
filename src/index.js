const express = require("express");
const app = express();
const port = 3001;

// ketika ingin memberikan url berupa pemisah titik
// bisa menggunakan titik ( . )
app.get("/some.text", (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});

// membuat suatu karakter menjadi opsional
// bisa menggunakan question tag ( ? )
app.get("/posts?", (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});

// membuat lebih dari satu karakter menjadi opsional
// bisa menggunakan wild card symbol ( * )
// symbol membuat apapun kata setelah kata utama diikuti ( * ) akan bisa dimasukkan karakter lain
app.get("/tag*", (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});

// endpoint api untuk error
app.get("/error/*", (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});

// apapun huruf atau kata dapat dimasukkan pada tanda *
// route yang dituju harus berakhiran fly
// ada huruf atau kata setelah fly, tidak bisa diakses
app.get(/.*fly$/, (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});
app.get("/*star", (req, res) => {
  console.log("Request URL:", req.url);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port number ${port}`);
});
