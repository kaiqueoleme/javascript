console.log("");
var idade = 70;

console.log(`Você têm ${idade} anos,`);
if (idade < 16) {
  console.log("Não vota");
}
if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Voto opcional");
}
if (idade >= 18 && idade < 70) {
  console.log("Voto obrigatório");
}

console.log("");