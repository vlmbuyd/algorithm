function solution(box, n) {
  return box.map((item) => Math.floor(item / n)).reduce((s, c) => s * c, 1);
}
