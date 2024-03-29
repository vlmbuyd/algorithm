const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";

for (i = 1; i < input.length; i++) {
  let divide = input[i].split(" ");
  for (const char of divide[1]) {
    result += char.repeat(parseInt(divide[0]));
  }
  console.log(result);
  result = "";
}
