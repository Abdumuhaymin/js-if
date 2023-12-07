let a = +prompt();
let b = +prompt();
let c = +prompt();
if ((a > c && a < b) || (a < c && a > b)) {
  console.log(a);
} else if ((b > c && b < a) || (b < c && b > a)) {
  console.log(b);
} else {
  console.log(c);
}
