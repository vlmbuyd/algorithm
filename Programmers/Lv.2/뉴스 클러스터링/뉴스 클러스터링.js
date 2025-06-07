// 다중 집합 만들기 (두 글자씩)
function makeToSet(str) {
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    const pair = str.substring(i, i + 2); // 두 글자씩 끊기

    if (/^[A-Za-z]{2}$/.test(pair)) {
      result.push(pair.toUpperCase());
    }
  }

  return result;
}

function solution(str1, str2) {
  // 1. 두 글자씩 끊어서 다중집합 만들기
  const str1List = makeToSet(str1);
  const str2List = makeToSet(str2);

  // 2-1. 교집합 구하기
  let intersection = [];

  const tmp = [...str2List];

  for (const el of str1List) {
    const idx = tmp.indexOf(el);

    if (idx !== -1) {
      intersection.push(el);
      tmp.splice(idx, 1);
    }
  }

  // 2-2. 합집합 구하기
  const union = [...str1List, ...tmp];

  // 3. 자카드 유사도 계산
  const jakard = union.length === 0 ? 1 : intersection.length / union.length;

  return Math.floor(jakard * 65536);
}
