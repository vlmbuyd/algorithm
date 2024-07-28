function solution(my_string) {
  return [...my_string]
    .filter((item) => !isNaN(+item))
    .map((item) => +item)
    .sort();
}
