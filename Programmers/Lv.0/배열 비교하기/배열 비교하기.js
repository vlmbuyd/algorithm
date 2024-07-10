function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const sum1 = arr1.reduce((sum, curr) => sum + curr, 0);
    const sum2 = arr2.reduce((sum, curr) => sum + curr, 0);
    return sum1 > sum2 ? 1 : sum2 > sum1 ? -1 : 0;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
}
