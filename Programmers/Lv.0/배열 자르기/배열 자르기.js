function solution(numbers, num1, num2) {
    return numbers.filter((_, index) => index >= num1 && index <= num2);
}