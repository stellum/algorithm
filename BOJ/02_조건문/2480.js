const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim()
  .split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);

let result = Number();

// 같은 눈 3개
if (num1 === num2 && num1 === num3) {
  result = 10000 + num1 * 1000;
}

// 같은 눈 2개
if (num1 === num2) {
  result = 1000 + num1 * 100;
} else if (num2 === num3) {
  result = 1000 + num2 * 100;
} else if (num1 === num3) {
  result = 1000 + num3 * 100;
}

// 모두 다른 눈
if (num1 != num2 && num1 != num3 && num2 != num3) {
  if (num1 > num2 && num1 > num3) {
    result = num1 * 100;
  } else if (num2 > num1 && num2 > num3) {
    result = num2 * 100;
  } else if (num3 > num1 && num3 > num2) {
    result = num3 * 100;
  }
}
console.log(result);
