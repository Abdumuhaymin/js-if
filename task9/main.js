let a = +prompt();
let b = +prompt();
let c = a;
if (a > b) {
  console.log((a = b));
  console.log((b = c));
} else {
  console.log(a);
  console.log(b);
}
