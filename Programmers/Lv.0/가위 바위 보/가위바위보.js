//풀이 1
function solution(rsp) {
  let answer = "";
  for (const el of rsp) {
    answer =
      el === "2"
        ? answer + "0"
        : el === "0"
        ? answer + "5"
        : el === "5"
        ? answer + "2"
        : null;
  }
  return answer;
}

//풀이 2
function solution(rsp) {
  const win = {
    2: "0",
    0: "5",
    5: "2",
  };
  const answer = rsp
    .split("")
    .map((item) => win[item])
    .join("");
  return answer;
}
