function solution(myString) {
  return [...myString]
    .map((item) => (item === "a" || item === "A" ? "A" : item.toLowerCase()))
    .join("");
}
