const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

// var a = input[0];
// var b = input[1];
// if (a < 50) console.log(a + "??!");
// if (b < 50) console.log(b + "??!");

const Arr = ["good", "time", "good", "time", "student"];

function solution() {
  let answer;
  return answer;
}

const result = Arr.filter((v, i) => Arr.indexOf(v) === i);
console.log(result);
