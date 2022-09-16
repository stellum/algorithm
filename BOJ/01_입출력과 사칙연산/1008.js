const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a / b);
