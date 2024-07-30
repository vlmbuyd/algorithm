function solution(n) {
  const answer = [];
  const n_length = n.toString().length;

  for (let i = n_length - 1; i >= 0; i--) {
    answer.push(n.toString()[i]);
  }
  return answer.map((i) => +i);
}
