function isPrime(num) {
  if (isNaN(num) || num < 2) return false; // 숫자가 아니거나 2보다 작으면 소수아님
  if (num === 2 || num === 3) return true; // 소수 2,3 예외처리 (루트 씌웠을 때 고려)

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;

  // n을 k진법으로 변환 -> 0을 기준으로 split -> 숫자로 변환
  const list = n
    .toString(k)
    .split("0")
    .map((i) => parseInt(i));

  // 소수 판별
  list.forEach((num) => {
    if (isPrime(num)) answer++;
  });

  return answer;
}
