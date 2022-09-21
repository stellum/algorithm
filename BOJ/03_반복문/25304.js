const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .split("\n");

let result = Number(input[0]);
let count = Number(input[1]);

input.splice(0, 2);

let check = 0;

for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(" ");
  check += Number(price) * Number(num);
}

if (result === check) {
  console.log("Yes");
} else {
  console.log("No");
}
