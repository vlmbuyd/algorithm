// 풀이 1
function includesOneToNine(str) {
  const regex = /[1-9]/;
  return regex.test(str);
}

function solution(str) {
  let answer = "";

  for (const el of str) {
    if (el !== "0" || (el === "0" && includesOneToNine(answer))) {
      answer += el;
    }
  }
  return answer;
}

// 풀이 2
function solution(str) {
  let idx = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      idx = i;
      continue;
    } else if (str[i] !== "0") break;
  }

  return idx === -1 ? str : str.slice(idx + 1);
}
