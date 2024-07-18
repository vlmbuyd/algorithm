//풀이1
function solution(num_list, n) {
  const prev = num_list.filter((_, idx) => idx < n);
  const after = num_list.filter((_, idx) => idx >= n);
  return [...after, ...prev];
}

//풀이2
function solution(num_list, n) {
  const prev = num_list.splice(0, n);
  num_list.push(...prev);
  return num_list;
}
