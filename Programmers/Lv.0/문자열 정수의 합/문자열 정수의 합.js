function solution(num_str) {
  return [...num_str].reduce((sum, curr) => sum + Number(curr), 0);
}
