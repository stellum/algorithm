const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim();

var n = Number(input[0]);
for (var i = 1; i <= 9; i++) {
  console.log(n + " * " + i + " = " + n * i);
}
