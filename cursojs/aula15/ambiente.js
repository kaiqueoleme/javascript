let num = [5, 8, 2, 9, 3];
num.sort();
num.push(1);
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log("");
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log("");
let valor = 6;
let pos = num.indexOf(valor);
if (pos == -1) {
  console.log(`O valor ${valor} não foi encontrado`);
} else {
  console.log(`O valor 4 está na posição ${pos}`);
}