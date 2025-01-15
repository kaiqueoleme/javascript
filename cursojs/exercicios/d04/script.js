var btn = document.getElementById("btn");
btn.addEventListener("click", calcular);



function calcular() {
  var tabuadas = document.getElementById("tabu");
  var num = document.getElementById("txtnum");
  var col = document.getElementById("txtcol");
  var ncol = Number(col.value);

  for (var c = 0; c <= ncol - 1; c++) {
    tabuadas.remove(0);
  }
  

  for (var c = 1; c <= ncol; c++) {
    var option = document.createElement("option");
    var r = Number(num.value) * c;
    option.text = `${num.value} x ${c} = ${r}`;
    tabuadas.add(option);
  }
}
