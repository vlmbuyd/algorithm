const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const count = parseInt(input.shift());

const arr = input[0].split(" ").map((item) => parseInt(item));

let max = -99999999999;
let min = 999999999;

for (i = 0; i < count; i++) {
  if (arr[i] >= max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(`${min} ${max}`);
