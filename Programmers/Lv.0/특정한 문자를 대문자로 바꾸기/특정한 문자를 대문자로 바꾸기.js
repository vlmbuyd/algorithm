function solution(my_string, alp) {
  return [...my_string]
    .map((item) => (item === alp ? item.toUpperCase() : item))
    .join("");
}
