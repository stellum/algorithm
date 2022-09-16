const path = require("path");

let input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim();

if (100 >= input && input >= 90) console.log("A");
else if (89 >= input && input >= 80) console.log("B");
else if (79 >= input && input >= 70) console.log("C");
else if (69 >= input && input >= 60) console.log("D");
else console.log("F");
