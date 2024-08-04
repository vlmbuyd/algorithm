function solution(s) {
    return s.length % 2 !== 0
      ? [...s].splice(Math.floor(s.length / 2), 1).join("")
      : [...s].splice(Math.floor(s.length / 2) - 1, 2).join("");
  }