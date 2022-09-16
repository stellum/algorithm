const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .split(" ");
// const [A, B] = [input[0], input[1]];

var A = parseInt(input[0]);
var B = parseInt(input[1]);

console.log(input[0]);
console.log(input[1]);
if (A > B) console.log(">");
if (A < B) console.log("<");
if (A === B) console.log("==");
