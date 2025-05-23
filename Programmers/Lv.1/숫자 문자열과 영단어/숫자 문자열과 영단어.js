function solution(s) {
  let answer = "";
  let tmp = ""; // 임시로 string을 저장하는 변수
  // string과 number를 매핑해주는 객체
  const stringToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const char of s) {
    // 숫자이면 answer에 추가
    if (Number(char)) {
      answer += char;
      tmp = "";
    } else {
      tmp += char;

      if (stringToNum[tmp]) {
        answer += String(stringToNum[tmp]);
        tmp = "";
      }
    }
  }

  return Number(answer);
}
