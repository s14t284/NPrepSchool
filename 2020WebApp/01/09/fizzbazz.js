let str = "";
for (let i = 0; i < 100000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    str = "FizzBuzz";
  } else if (i % 3 === 0) {
    str = "Fizz";
  } else if (i % 5 === 0) {
    str = "Buzz";
  } else {
    str = "" + i;
  }
  document.write(str + " ");
}
