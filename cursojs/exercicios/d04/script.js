var btn = document.getElementById("btn");
btn.addEventListener("click", calcular);

function deletar() {
  var tabuadas = document.getElementById("tabu");
  if (Number(tabuadas.length) <= 2) {
    tabuadas.remove(0);
    tabuadas.remove(1);
  }

  if (Number(tabuadas.length) >= 10) {
    for (var c = 1; c <= 10; c++) {
      tabuadas.remove(c);
    }
  }
}

function calcular() {
  deletar();
  var num = document.getElementById("txtnum");
  var tabuadas = document.getElementById("tabu");
  if (tabuadas.length == 0) {
    for (var c = 1; c <= 10; c++) {
      var option = document.createElement("option");
      var r = Number(num.value) * c;
      option.text = `${num.value} x ${c} = ${r}`;
      tabuadas.add(option);
    }
  }
}
