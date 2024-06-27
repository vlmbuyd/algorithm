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
