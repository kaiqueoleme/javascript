var btn = document.getElementById("btn");
btn.addEventListener("click", calcular);

function deletar(tabuadas) {
  for (var c = 0; c <= 9; c++) {
    tabuadas.remove(0);
  }
}

function calcular() {
  var tabuadas = document.getElementById("tabu");
  var num = document.getElementById("txtnum");
  deletar(tabuadas);
  if (tabuadas.length == 0) {
    for (var c = 1; c <= 10; c++) {
      var option = document.createElement("option");
      var r = Number(num.value) * c;
      option.text = `${num.value} x ${c} = ${r}`;
      tabuadas.add(option);
    }
  }
}
