// 풀이 1
function solution(hp) {
  let result = 0;
  for (let i = 5; i > 0; i -= 2) {
    if (i <= hp) {
      result += Math.floor(hp / i);
      hp = hp % i;
    }
  }
  return result;
}

// 풀이 2
function solution(hp) {
  let answer = 0;
  const GENERAL = 5;
  const SOILDER = 3;
  const WORK = 1;

  while (hp > 0) {
    if (hp >= GENERAL) {
      answer += Math.floor(hp / GENERAL);
      hp = hp % GENERAL;
    } else if (hp >= SOILDER) {
      answer += Math.floor(hp / SOILDER);
      hp = hp % SOILDER;
    } else if (hp >= WORK) {
      answer += Math.floor(hp / WORK);
      hp = hp % WORK;
    }
  }

  return answer;
}
