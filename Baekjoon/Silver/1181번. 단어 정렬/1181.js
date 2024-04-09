const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

//숫자 제거
for (let i = 0; i < input.length; i++) {
  if (!isNaN(input[i])) {
    input.splice(i, 1);
  }
}

//길이 짧은 순
let arr = input.sort((a, b) => {
  return a.length - b.length;
});

//중복 제거
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    arr.splice(i, 1);
  }
}

//사전 순
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j <= 50; j++){
    if(arr[i].length === j)
  }




    if (arr[i].length === arr[i + 1]) {
      result.push(arr[i]);
      result.push(arr[i + 1]);
    }
}
arr.sort();