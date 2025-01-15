var btn = document.getElementById("btn");
btn.addEventListener("click", calcular);

function calcular() {
  var tabuadas = document.getElementById("tabu");
  var num = document.getElementById("txtnum");
  var col = document.getElementById("txtcol");
  var ncol = Number(col.value);

  tabuadas.innerHTML = "";

  for (var c = 1; c <= ncol; c++) {
    var option = document.createElement("option");
    var r = Number(num.value) * c;
    option.text = `${num.value} x ${c} = ${r}`;
    option.value = `tab${c}`
    tabuadas.appendChild(option);
  }
}
