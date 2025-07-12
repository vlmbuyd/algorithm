//풀이1
function solution(n, control) {
  let num = n;
  for (const el of [...control]) {
    el === "w"
      ? (num += 1)
      : el === "s"
      ? (num -= 1)
      : el === "d"
      ? (num += 10)
      : el === "a"
      ? (num -= 10)
      : null;
  }

  return num;
}

//풀이2
function solution(n, control) {
  let answer = n;
  [...control].map((item) =>
    item === "w"
      ? (answer += 1)
      : item === "s"
      ? (answer -= 1)
      : item === "d"
      ? (answer += 10)
      : (answer -= 10)
  );
  return answer;
}

// 풀이 3
function solution(n, control) {
  return [...control].reduce((acc, curr) => {
    if (curr === "w") return acc + 1;
    else if (curr === "s") return acc - 1;
    else if (curr === "d") return acc + 10;
    else if (curr === "a") return acc - 10;
  }, n);
}
