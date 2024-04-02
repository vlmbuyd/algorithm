const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const count = parseInt(input.shift());

for (i = 0; i < count; i++) {
  let sum = 0;
  let num = 0;
  for (const el of input[i]) {
    if (el === "O") {
      num++;
      sum += num;
    } else {
      num = 0;
      continue;
    }
  }
  console.log(sum);
}
