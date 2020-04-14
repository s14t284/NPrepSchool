const age = 17;
let isMember = false;
let payment = 0;

if (age <= 15) {
  payment = 800;
} else if (isMember) {
  payment = 1000;
} else {
  payment = 1800;
}
document.write(payment);
