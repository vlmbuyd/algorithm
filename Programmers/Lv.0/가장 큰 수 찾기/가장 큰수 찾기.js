function solution(array) {
  let answer = [0, 0];
  let index = -1;
  let num = -999;
  for (const el of array) {
    index++;
    if (el > num) {
      num = el;
      answer[0] = num;
      answer[1] = index;
    }
  }
  return answer;
}
