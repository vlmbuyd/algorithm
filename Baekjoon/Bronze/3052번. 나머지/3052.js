const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => parseInt(item));

let divide = input.map((el) => el % 42);

let result = [];

for (const el of divide) {
  if (result.includes(el)) {
    continue;
  } else {
    result.push(el);
  }
}

console.log(result.length);
