// 풀이 1

// const input = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// let max = 0;
// let index = 0;
// let maxIndex = 0;

// for (const el of input) {
//   index++;
//   if (parseInt(el) > max) {
//     max = el;
//     maxIndex = index;
//   }
// }

// console.log(max);
// console.log(maxIndex);

// 풀이 2

const fs = require("fs");
const readline = require("readline");
const path = "./input.txt";

const rl = readline.createInterface({
  //   input: process.stdin,
  input: fs.createReadStream(path),
  output: process.stdout,
});

const inputs = [];

rl.on("line", (input) => {
  // 입력을 배열에 추가
  inputs.push(input);
});

rl.on("close", () => {
  // 입력 받기가 완료되면 배열을 출력
  let max = 0;
  let index = 0;
  let indexMax = 0;

  for (const el of inputs) {
    index++;
    if (parseInt(el) > max) {
      max = el;
      indexMax = index;
    }
  }
  console.log(max);
  console.log(indexMax);
});
