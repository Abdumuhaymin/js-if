let a = +prompt();
let b = +prompt();
let c = +prompt();
if (a < b && a < c) {
  console.log(a);
} else if (a > b && c > b) {
  console.log(b);
} else {
  console.log(c);
}
if ((a > c && a < b) || (a < c && a > b)) {
  console.log(a);
} else if ((b > c && b < a) || (b < c && b > a)) {
  console.log(b);
} else {
  console.log(c);
}
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
