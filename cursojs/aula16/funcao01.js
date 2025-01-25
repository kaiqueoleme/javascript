function parimpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let num = 6;
let res = parimpar(num);
console.log(`O valor ${num} é ${res}`);
