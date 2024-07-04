function solution(num_list) {
  let odd_num = 0;
  let even_num = 0;
  num_list.map((item) => (item % 2 !== 0 ? odd_num++ : even_num++));
  return [even_num, odd_num];
}
