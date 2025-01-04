function calcular() {
  var start = document.getElementById("txtstart");
  var end = document.getElementById("txtend");
  var step = document.getElementById("txtstep");
  var res = document.getElementById("res");
  
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
    return;
  }

  if (step.value == 0) {
    alert("Passo inválido! Considerando PASSO 1");
    step = 1;
  }

  if (Number(start.value) < Number(end.value)) {
    var msg = "";
    var c = Number(start.value);
    do {
      msg += `${c} &#128073; `;

      c += Number(step.value);
    } while (c <= end.value);
  }
    
  
  if (Number(start.value) > Number(end.value)) {
    var msg = "";
    var msg = "";
    for (var c = Number(start.value); c >= end.value; c -= Number(step.value)) {
      msg += `${c} &#128073; `;
    }
  }

  if (start.value == end.value) {
    var msg = `${start.value}`;
  }

  res.innerHTML =  `${msg} &#127937;`
}
