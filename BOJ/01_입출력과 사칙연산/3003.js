const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];

// i = input value
// idx = index 순서
let answer = input.map((i, idx) => {
  return chess[idx] - i;
});
console.log(...answer);
