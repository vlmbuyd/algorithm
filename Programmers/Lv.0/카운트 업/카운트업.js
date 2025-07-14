//풀이1
function solution(start_num, end_num) {
  let answer = [];
  for (let i = 0; i < end_num - start_num + 1; i++) {
    answer.push(start_num + i);
  }
  return answer;
}

//풀이2
function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

//풀이3
function solution(start, end) {
  return Array.from({ length: end - start + 1 }, () => start++);
}

//풀이4
function solution(start_num, end_num) {
  return new Array(end_num - start_num + 1)
    .fill(0)
    .map((_, i) => i + start_num);
}
