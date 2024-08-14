function solution(n, m) {
  const answer = [];
  const divisor = [];
  for (let i = 1; i <= (n > m ? n : m); i++) {
    if (n % i === 0 && m % i === 0) divisor.push(i);
  }
  const max = Math.max(...divisor);
  answer.push(max); // 최대공약수
  answer.push(max * (n / max) * (m / max)); // 최소공배수

  return answer;
}
