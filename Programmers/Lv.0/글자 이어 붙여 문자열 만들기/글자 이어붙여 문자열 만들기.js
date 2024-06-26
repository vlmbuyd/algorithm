function solution(my_string, index_list) {
  let answer = "";
  for (const el of index_list) {
    answer += my_string[el];
  }
  return answer;
}
