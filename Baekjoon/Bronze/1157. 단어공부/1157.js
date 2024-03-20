const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().toUpperCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (i = 0; i < 26; i++) {
  if (max === result[i] && index !== i) {
    isSame = true; //max는 같지만 다른 알파벳 존재
    break; //하나라도 존재시 ?출력이므로 바로 탈출
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
