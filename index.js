// way to import module
// const operations = require("./module.js");
const { add, multiply } = require("./module.js");

function printMessage(message) {
  console.log(message);
}

var a = 2;
var b = 3;

printMessage("Hello World!");
console.log(`Sum of ${a} & ${b}:`, add(2, 3));
console.log(`Multiply of ${a} & ${b}:`, multiply(2, 3));
