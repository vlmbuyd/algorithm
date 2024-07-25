function solution(myString) {
  return [...myString]
    .map((item) => (item.charCodeAt() < 108 ? "l" : item))
    .join("");
}
