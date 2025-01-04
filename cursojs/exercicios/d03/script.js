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

  if (start.value < end.value) {
    var s =  Number(start.value);
    var e =  Number(end.value);
    var st =  Number(step.value);
    var cont = "";

    for (c = s; c <= e; c += st) {
      res.innerHTML = `${s}...`
    }
  }
/*
  if (start.value > end.value) {
    var s =  Number(start.value);
    var e =  Number(end.value);
    var st =  Number(step.value);
    var cont = "";

    for (c = s; c >= e; c -= st) {
      cont += `${c} &#128073; `;
      res.innerHTML = `${cont} &#127937;`;
    }
  }

  if (start.value == end.value) {
    res.innerHTML = `${start.value}`;
  } */
}
