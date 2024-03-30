const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [count, num] = input;

let result = 0;

//풀이 1
for (const el of num) {
  result += parseInt(el);
}

//풀이 2
// for (i = 0; i < count; i++) {
//   result += parseInt(num[i]);
// }

console.log(result);
