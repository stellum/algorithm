const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .split("\n");

// A + B
for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
