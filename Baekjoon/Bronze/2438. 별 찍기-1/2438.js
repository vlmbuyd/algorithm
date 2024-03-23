const num = parseInt(require("fs").readFileSync("dev/stdin").toString());

for (i = 1; i < num + 1; i++) {
  console.log("*".repeat(i));
}
