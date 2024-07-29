function solution(s) {
  let count_p = 0;
  let count_y = 0;

  [...s].map((item) =>
    item.toLowerCase() === "p"
      ? count_p++
      : item.toLowerCase() === "y"
      ? count_y++
      : null
  );

  return count_p === count_y;
}
