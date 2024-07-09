function solution(num_list) {
  const arr = num_list.sort((a, b) => a - b).filter((_, index) => index >= 5);
  return arr.sort((a, b) => a - b);
}
