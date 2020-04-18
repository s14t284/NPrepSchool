"use strict"; // strict mode 宣言後の記述ミスをエラーとして表示する
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
