function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((item, idx) => item * (idx + 1));
}
