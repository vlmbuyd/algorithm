function solution(n, k) {
  const per = Math.floor(n / 10);
  return 12000 * n + 2000 * k - 2000 * per;
}
