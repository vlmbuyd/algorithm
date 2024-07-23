function solution(arr, k) {
  return arr.map((item) => (k % 2 === 1 ? item * k : item + k));
}
