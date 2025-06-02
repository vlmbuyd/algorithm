function solution(cacheSize, cities) {
  let cachedList = new Array(cacheSize).fill("");
  let answer = 0;

  // 대소문자 구분 없이 모두 대문자로
  const capitalCities = [...cities].map((item) => item.toUpperCase());

  // 배열 순회
  for (const el of capitalCities) {
    // el이 캐시 배열에 이미 존재
    if (cachedList.includes(el)) {
      // el 제외한 리스트 생성
      const filteredList = cachedList.filter((i) => i !== el);

      cachedList = [el, ...filteredList];

      answer += 1;
    } else if (cacheSize === 0) {
      // cacheSize가 0일 때 예외처리
      answer += 5;
    } else {
      // el이 캐시 배열에 없을 때

      // tmp 초기화 및 cachedList 복사
      let tmp = [...cachedList];

      // 다른 배열들 한 칸씩 이동
      cachedList.forEach((item, idx) => {
        if (idx !== 0) {
          // 인덱스 0은 제외
          tmp[idx] = cachedList[idx - 1];
        }
      });

      // 맨 앞에 해당 요소 추가
      tmp[0] = el;

      // tmp -> cachedList로 요소 옮기기
      cachedList = [...tmp];

      answer += 5;
    }
  }
  return answer;
}
