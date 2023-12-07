let a = +prompt();
let b = +prompt();
let c = 0;
if (a == b) {
  console.log((c = 0));
} else if (a > b) {
  c += a;
  console.log(c);
} else {
  c += b;
  console.log(c);
}
