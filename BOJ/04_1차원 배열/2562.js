// 최댓값

const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let max = input[0];
let maxIndex = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIndex = i;
  }
}

console.log(max);
console.log(maxIndex + 1);
