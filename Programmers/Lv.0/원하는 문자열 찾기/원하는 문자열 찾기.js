function solution(myString, pat) {
  const str = pat.toLowerCase();
  return myString.toLowerCase().includes(str) ? 1 : 0;
}
