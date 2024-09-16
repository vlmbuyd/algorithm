function solution(age) {
  return [...age.toString()]
    .map((v) => String.fromCharCode(Number(v) + 97))
    .join("");
}
