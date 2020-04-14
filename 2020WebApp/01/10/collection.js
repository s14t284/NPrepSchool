let classes = ["A", "B", "C", "D"];

for (let grade = 0; grade < 4; grade++) {
  for (let i = 1; i <= classes.length; i++) {
    document.write("<p>" + grade + "年" + classes[i] + "</p>");
  }
}
