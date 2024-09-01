function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  const num1 = Number(a);
  const num2 = Number(b);
  return op === "+" ? num1 + num2 : op === "-" ? num1 - num2 : num1 * num2;
}
