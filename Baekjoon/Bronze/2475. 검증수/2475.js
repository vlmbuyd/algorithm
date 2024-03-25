//풀이 1
const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

let sum = 0;

for (const num of input) {
  sum += parseInt(num) ** 2;
}

console.log(sum % 10);

//풀이 2
const input = require("fs").readFileSync("dev/stdin")``
  .toString()
  .trim()
  .split(" ");
const result = input.reduce((sum, current) => sum + parseInt(current) ** 2, 0);

console.log(result % 10);
