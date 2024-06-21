const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((item) => parseInt(item));

console.log(input);

let mismatch = 0;
let arr = [];

for (let i = 0; i < N; i++) {
  for (const el of input[i]) {
    if (el === "B") {
      mismatch++;
    } else if (el === "W") {
      mismatch--;
    }
  }
  arr.push(mismatch);
  mismatch = 0;
}

console.log(arr);
