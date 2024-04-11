const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const string = input.shift();
const count = parseInt(input[0]);

console.log(string[count - 1]);
