function solution(x) {
  const sum = +[...x.toString()].reduce((s, c) => s + +c, 0);
  return !(x % sum);
}
