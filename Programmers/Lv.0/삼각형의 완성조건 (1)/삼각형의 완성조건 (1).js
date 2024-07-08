function solution(sides) {
  const max = Math.max(...sides);
  const max_idx = sides.indexOf(max);
  const arr = sides.filter((_, idx) => idx !== max_idx);
  return max < arr[0] + arr[1] ? 1 : 2;
}
