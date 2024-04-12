const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const x = Number(input[0].split(" ")[1]);
const nums = input[1].split(" ");

let result = "";

for (const el of nums) {
  if (parseInt(el) < x) {
    result += el + " ";
  }
}

console.log(result);
