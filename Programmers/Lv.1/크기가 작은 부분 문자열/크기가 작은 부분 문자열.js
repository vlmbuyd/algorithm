function solution(t, p) {
  const length = p.length;
  let count = 0;
  for (let i = 0; i < t.length - (length - 1); i++) {
    if (+p >= +[...t].slice(i, i + length).join("")) count++;
  }
  return count;
}
