const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim();

let output = 0;

// 1부터 n까지 합
for (let i = 1; i <= input; i++) {
  output += i;
}
console.log(output);
