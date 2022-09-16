const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 이름을 입력받아 인사하기
let name = "";

process.stdout.write(`이름을 입력하세요: `); // 줄바꿈 없이 출력
rl.on("line", (input) => {
  name = input;
  rl.close();
}).on("close", () => {
  console.log(`안녕하세요? ${name}님.`);
  process.exit();
});
