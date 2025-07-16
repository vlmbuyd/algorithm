// 풀이 1
function solution(sides) {
  const max = Math.max(...sides);
  const max_idx = sides.indexOf(max);
  const arr = sides.filter((_, idx) => idx !== max_idx);
  return max < arr[0] + arr[1] ? 1 : 2;
}

// 풀이 2
function solution(sides) {
  const max = Math.max(...sides);
  const maxIdx = sides.indexOf(max);
  sides.splice(maxIdx, 1);

  return sides[0] + sides[1] > max ? 1 : 2;
}
