function solution(num_list) {
  const odd = num_list.filter((item) => item % 2 === 1);
  const even = num_list.filter((item) => item % 2 === 0);

  return Number(odd.join("")) + Number(even.join(""));
}
