function solution(left, right) {
  const num = Array(right - left + 1)
    .fill(left)
    .map((v, i) => v + i);
  const divisor_num = Array(right - left + 1).fill(0);
  for (const el of num) {
    for (let j = 1; j <= el; j++) {
      if (el % j === 0) divisor_num[el - left] += 1;
    }
  }
  return num.reduce((s, c, i) => s + (divisor_num[i] % 2 ? -c : c), 0);
}
