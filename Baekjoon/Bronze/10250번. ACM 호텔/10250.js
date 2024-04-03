const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = parseInt(input.shift());

for (i = 0; i < testCase; i++) {
  let [floor, roomNum, customerNum] = input[i]
    .split(" ")
    .map((item) => parseInt(item));

  let result;

  if (customerNum / floor <= 1.0) {
    result = String(customerNum) + "01";
    console.log(result);
  } else {
    result =
      String(customerNum % floor === 0 ? floor : customerNum % floor) + // 층
      String(Math.ceil(customerNum / floor)).padStart(2, "0"); // 호수
    console.log(result);
  }
}
