function solution(n) {
  let max_num = 0;
  let divide = 0;
  n >= 6 ? (max_num = 6) : (max_num = n);
  for (let i = 1; i <= max_num; i++) {
    if (n % i === 0 && 6 % i === 0) divide = i;
  }

  return (divide * (n / divide) * (6 / divide)) / 6;
}
