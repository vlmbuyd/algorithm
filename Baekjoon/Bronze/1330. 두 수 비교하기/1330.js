const input = require("fs")
  .readFileSync("dev/stdin", "utf-8")
  .split(" ")
  .map((item) => Number(item));

if (input[0] > input[1]) {
  console.log(">");
} else if (input[0] < input[1]) {
  console.log("<");
} else {
  console.log("==");
}
