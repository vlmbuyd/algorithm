// 풀이 1
function solution(n) {
  const answer = [...new Array(n)]
    .map((_, i) => i + 1)
    .filter((item) => item % 2 !== 0);
  return answer;
}

// 풀이 2
function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer.push(i);
  }

  return answer;
}
