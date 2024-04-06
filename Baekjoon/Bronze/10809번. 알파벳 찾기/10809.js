const input = require("fs").readFileSync("input.txt").toString().trim();

const alphabet = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  let charIndex = input[i].charCodeAt() - 97;

  if (alphabet[charIndex] === -1) {
    alphabet[charIndex] = input.indexOf(input[i]);
  }
}

let result = "";

for (const el of alphabet) {
  result += String(el) + " ";
}

console.log(result);

//풀이 2
// const result = [];

// for (let i = 97; i <= 122; i++) {
//   result.push(input.indexOf(String.fromCharCode(i)));
// }

// console.log(result.join(" "));
