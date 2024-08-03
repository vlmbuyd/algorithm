function solution(numbers) {
  const arr = [...new Array(10)].fill(0).map((item, idx) => item + idx);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    numbers.includes(arr[i]) ? null : (answer += arr[i]);
  }
  return answer;
}
