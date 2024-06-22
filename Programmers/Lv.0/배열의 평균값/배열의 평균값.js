function solution(numbers) {
  let sum = 0;
  for (const el of numbers) {
    sum += el;
  }
  const answer = sum / numbers.length;
  return answer;
}

//풀이 2
function solution(numbers) {
  let answer = numbers.reduce((sum, current) => sum + current, 0);
  return answer / numbers.length;
}
