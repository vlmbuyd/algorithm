const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((items) => parseInt(items));

let scale;
const ASCEND = "ascending";
const DESCEND = "descending";
const MIXED = "mixed";

for (i = 1; i <= 8; i++) {
  if (input[i - 1] === i) {
    scale = ASCEND;
  } else {
    scale = "";
    break;
  }
}

for (i = 1; i <= 8; i++) {
  if (scale === ASCEND) {
    break;
  } else {
    //ascending이 아닐 시에만 실행
    if (input[i - 1] === 9 - i) {
      scale = DESCEND;
    } else {
      scale = MIXED;
      break;
    }
  }
}

console.log(scale);
