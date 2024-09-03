function solution(number) {
  return [...number].reduce((sum, curr) => +sum + +curr, 0) % 9;
}
