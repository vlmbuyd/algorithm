function solution(arr) {
  const answer = [];
  arr.map((v, i) => (arr[i] === arr[i + 1] ? null : answer.push(v)));
  return answer;
}
