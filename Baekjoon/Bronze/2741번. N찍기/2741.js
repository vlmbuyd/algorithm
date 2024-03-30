const n = require("fs").readFileSync("input.txt").toString().trim();

let result = "";

for (i = 1; i <= parseInt(n); i++) {
  result += String(i) + "\n";
}

console.log(result);
