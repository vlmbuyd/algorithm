const n = require("fs").readFileSync("input.txt").toString().trim();

for (i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} =`, parseInt(n) * i);
}
