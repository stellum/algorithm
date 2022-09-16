const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim()
  .split(" ");

let hour = Number(input[0]);
let minute = Number(input[1]);

minute -= 45; // 설정되어 있는 알람시간에서 45분 앞서는 시간

if (minute < 0) {
  minute += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour + " " + minute); // 입력값 {H: 시간, M: 분}

/*
1- 먼저 minute 에서 45분을 뺀 값을 구하기
2- 그 값이 음수일 경우, 45뷴 뺀 값에다 60을 더해준 값이 minute 값이 된다
3- hour 값을 1 빼준다
4- 이때 만약 입력값이 0시면 1을 빼준 hour 값이 -1이 되므로 23 으로 만들어줘야 한다
*/
