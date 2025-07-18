// 풀이 1
function solution(arr) {
  const answer = [];
  for (const el of arr) {
    answer.push(...Array(el).fill(el));
  }
  return answer;
}

// 풀이 2
function solution(arr) {
  const X = [];

  arr.forEach((el) => {
    for (let i = 0; i < el; i++) {
      X.push(el);
    }
  });

  return X;
}
