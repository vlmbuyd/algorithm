function solution(phone_number) {
  const arr = [...phone_number];
  const last_num = arr.splice(phone_number.length - 4, 4).join("");
  return arr.map((item) => item.replace(item, "*")).join("") + String(last_num);
}
