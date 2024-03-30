const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const [hour, min] = input;
const alarmTime = [];

if (min >= 45) {
  alarmTime.push(hour);
  alarmTime.push(min - 45);
} else if (min < 45) {
  if (hour === 0) {
    alarmTime.push(23);
  } else {
    alarmTime.push(hour - 1);
  }
  alarmTime.push(60 - (45 - min));
}

console.log(alarmTime[0], alarmTime[1]);
