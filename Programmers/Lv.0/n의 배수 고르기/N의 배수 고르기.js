function solution(n, numlist) {
  const answer = numlist.filter((item) => item % n === 0);
  return answer;
}
