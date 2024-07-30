function solution(n) {
  return [...n.toString()].reduce((sum, curr) => sum + +curr, 0);
}
