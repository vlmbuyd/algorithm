const input = require("fs").readFileSync("./input.txt").toString().split("\n");

let multiplyNum = 1;

const array = new Array(10).fill(0);

for (const el of input) {
  multiplyNum *= parseInt(el);
}

for (const el of String(multiplyNum)) {
  for (i = 0; i < 10; i++) {
    if (parseInt(el) === i) {
      array[i]++;
    }
  }
}

for (const el of array) {
  console.log(el);
}
