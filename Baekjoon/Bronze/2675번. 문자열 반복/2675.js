const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const testCount = parseInt(input[0]);
let result = "";

for (i = 1; i <= testCount; i++) {
  let count = parseInt(input[i].split(" ")[0]);
  let char = input[i].split(" ")[1];
  for (const el of char) {
    result += el.repeat(count);
  }
  console.log(result);
  result = "";
}
