const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const count = parseInt(input.shift());

for (const el of input) {
  let sum = parseInt(el.split(" ")[0]) + parseInt(el.split(" ")[1]);
  console.log(sum);
}
