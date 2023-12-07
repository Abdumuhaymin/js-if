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
