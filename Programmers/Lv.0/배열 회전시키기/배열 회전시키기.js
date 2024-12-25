function solution(numbers, direction) {
  const arr = [];
  if (direction === "right") {
    const last_num = numbers.pop();
    numbers.unshift(last_num);
  } else {
    const first_num = numbers.shift();
    numbers.push(first_num);
  }
  return numbers;
}
