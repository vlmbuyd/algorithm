function solution(cipher, code) {
  const arr = [];
  [...cipher].map((item, index) =>
    (index + 1) % code === 0 ? arr.push(item) : null
  );
  return arr.join("");
}
