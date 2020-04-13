function calcCircleArea(halfLength) {
  return halfLength * halfLength * 3.14;
}

const defaultString = "cmの円の面積は";
document.write(
  "<p>" + "半径" + 5 + defaultString + calcCircleArea(5) + "cm^2</p>"
);
document.write(
  "<p>" + "半径" + 10 + defaultString + calcCircleArea(10) + "cm^2</p>"
);
document.write(
  "<p>" + "半径" + 15 + defaultString + calcCircleArea(15) + "cm^2</p>"
);
