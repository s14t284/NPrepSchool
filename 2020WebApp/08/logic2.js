const age = 65;
let isMember = true;
let result = null;
if (age >= 60 && isMember) {
  result = "シニア会員割引の対象です";
} else {
  result = "シニア会員割引の対象ではありません";
}
document.write(result);
