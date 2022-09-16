const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../input.txt"))
  .toString()
  .trim()
  .split("\n");

const current = input[0].split(" ").map(Number);
// console.log(input[0]);
// console.log(current[1]);
// console.log(current);

/*
current 변수를 사용하는 이유를 드디어 이해한거같다..! 
왜냐하면, 콘솔로 input[0] 와 input[1] 을 찍어봤을 때 0번째는 14 30 이 나왔고
1번째는 20이 나왔다. 엥? 그렇담 각 줄마다 인덱스로 인식하고 있는건가보다! 

결국 currentMinute 에 접근하기 위해서는 input[0] 으로만 접근이 불가한 것이었다.

current 를 콘솔에 찍어봤더니 [ 14, 30 ] 이 나왔다... 
그렇담 current 라는 변수를 별개로 만들어서 30 에 접근하려면
current[1] 이 되는것이었다!!!!! 휴... 어려워 
*/

let currentHour = current[0];
let currentMinute = current[1];
let cookTime = Number(input[1]); // Number = parseInt
let total = currentHour * 60 + currentMinute + cookTime;

// console.log(total);
// 121 % 60;
// // 시간 구하기
// console.log(121 / 60);

// 현재 시 구하기
currentTime = Math.floor(total / 60);
console.log(currentTime);

// 현재 분 구하기
currentMin = Math.floor(total % 60);
console.log(currentMin);

if (currentTime >= 24) {
  currentTime -= 24;
}
// console.log(currentTime);

console.log(currentTime + " " + currentMin);

/*
1. 현재 시간과 cookTime 더해서 총 minute 을 구한다 (분으로 구해졌다)
2. total 시간에서 시간을 구해서 변수에 저장한다
3. total 시간에서 분을 구해서 변수에 저장한다
4. 구한 시간이 24시가 넘는지 확인하다

*/
