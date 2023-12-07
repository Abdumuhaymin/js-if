let a = +prompt();
let b = +prompt();
let c = +prompt();
let amount = 0;
let amount2 = 0;
if (a > 0 && b > 0 && c > 0) {
  console.log(amount + 3);
} else if (
  (a < 0 && b > 0 && c > 0) ||
  (a > 0 && b < 0 && c > 0) ||
  (a > 0 && b > 0 && c < 0)
) {
  console.log(amount + 2);
} else if (
  (a < 0 && b < 0 && c > 0) ||
  (a > 0 && b < 0 && c < 0) ||
  (a < 0 && b > 0 && c < 0)
) {
  console.log(amount + 1);
} else {
  console.log(amount);
}
if (a < 0 && b < 0 && c < 0) {
  console.log(amount2 + 3);
} else if (
  (a < 0 && b < 0 && c > 0) ||
  (a > 0 && b < 0 && c < 0) ||
  (a < 0 && b > 0 && c < 0)
) {
  console.log(amount2 + 2);
} else if (
  (a < 0 && b > 0 && c > 0) ||
  (a > 0 && b < 0 && c > 0) ||
  (a < 0 && b > 0 && c < 0)
) {
  console.log(amount2 + 1);
} else {
  console.log(amount2);
}
