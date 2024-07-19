function solution(n, k) {
  return Array(Math.floor(n / k))
    .fill(k)
    .map((item, index) => item * (index + 1));
}
