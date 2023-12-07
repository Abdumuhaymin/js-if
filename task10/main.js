let a = +prompt();
let b = +prompt();
let c = a + b;
if ((a = b)) {
  console.log((c = 0));
} else {
  console.log(c);
}
