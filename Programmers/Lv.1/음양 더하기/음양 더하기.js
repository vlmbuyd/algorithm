function solution(absolutes, signs) {
  return absolutes
    .map((item, idx) => (signs[idx] ? item : -item))
    .reduce((s, c) => s + c, 0);
}
