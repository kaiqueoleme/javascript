function fatorial(x) {
  let msg = "";
  let fat = 1;
  for (let c = x; c > 1; c--) {
    msg += `${c} x `;
    fat *= c;
  }
  msg += `1 = ${fat}`;
  return msg;
}

console.log(fatorial(6));
