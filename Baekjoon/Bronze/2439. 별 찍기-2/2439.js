const num = parseInt(require("fs").readFileSync("dev/stdin").toString());

let result = "";

for (i = 1; i <= num; i++) {
  result += " ".repeat(num - i); //공백추가
  for (j = 1; j <= i; j++) {
    //별찍기
    result += "*";
  }
  console.log(result);
  result = "";
}
