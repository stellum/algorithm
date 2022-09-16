// const path = require("path");

// let input = require("fs")
//   .readFileSync(path.resolve(__dirname, "./input.txt"))
//   .toString()
//   .trim()
//   .split(" ");

// const a = parseInt(input);
// console.log(input[0]);
// console.log(input[1]);
// console.log(input[2]);
// const b = parseInt(input);
// const c = parseInt(input);
// console.log((a + b) % c);
// console.log(((a % c) + (b % c)) % c);
// console.log((a * b) % c);
// console.log((a % c) * ((b % c) % c));

const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log((a % c) * ((b % c) % c));
