const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 세 정수를 입력받아 최댓값 구하기
let num = [];
let count = 0;

rl.on("line", (input) => {
  num.push(input);
  count += 1;
  if (count === 3) {
    rl.close();
  }
}).on("close", () => {
  const a = parseInt(num[0]);
  const b = parseInt(num[1]);
  const c = parseInt(num[2]);

  maximum = a;
  if (b > maximum) {
    maximum = b;
  }
  if (c > maximum) {
    maximum = c;
  }

  console.log(`최댓값은 ${maximum}입니다.`);
  process.exit();
});
