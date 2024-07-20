function solution(my_string, is_prefix) {
  let answer = false;
  for (let i = 0; i < is_prefix.length; i++) {
    if (is_prefix.length <= my_string.length && is_prefix[i] === my_string[i]) {
      answer = true;
    } else {
      answer = false;
    }
  }
  return +answer;
}
