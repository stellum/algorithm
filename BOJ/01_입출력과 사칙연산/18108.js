const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

const y = parseInt(input);
console.log(y - 543);
