function solution(my_string, num1, num2) {
    return [...my_string]
      .map((item, idx) =>
        idx === num1 ? my_string[num2] : idx === num2 ? my_string[num1] : item
      )
      .join("");
  }