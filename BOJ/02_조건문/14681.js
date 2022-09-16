const path = require("path");

const [x, y] = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt")) // fs.readFileSync에 dev/stdin을 항상 입력해왔는데, 여기서 dev/stdin을 입력하면 런타임에러가 나왔다. 그래서 이 부분을 0으로 표시해줬더니 해결되었다!
  .toString()
  .trim()
  .split("\n");

// solution 1
if (x > 0 && y > 0) console.log(1);
else if (x < 0 && y > 0) console.log(2);
else if (x < 0 && y < 0) console.log(3);
else if (x > 0 && y < 0) console.log(4);

// solution 2
if (x > 0) {
  y > 0 ? console.log(1) : console.log(4);
}
if (x < 0) {
  y > 0 ? console.log(2) : console.log(3);
}
