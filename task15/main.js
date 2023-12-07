let a = +prompt();
let b = +prompt();
let c = +prompt();
if ((a + b > a + c) & (a + b > b + c)) {
  console.log(a);
  console.log(b);
} else if (a + c > a + b && a + c > b + c) {
  console.log(a);
  console.log(c);
} else if (b + c > a + b && b + c > a + c) {
  console.log(b);
  console.log(c);
}
