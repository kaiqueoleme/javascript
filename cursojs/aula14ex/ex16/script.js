var btn = document.getElementById("btn");
btn.addEventListener("click", contar);

function contar() {
  let ini = document.getElementById("txti");
  let end = document.getElementById("txtf");
  let step = document.getElementById("txtp");
  let res = document.getElementById("res");
  if (
    ini.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    alert("Faltam dados");
  } else {
    res.innerHTML = "Contando: ";
    let i = Number(ini.value);
    let e = Number(end.value);
    let s = Number(step.value);

    //Contagem crescente
    if (i < f) {
      for (let c = i; c <= e; c += s) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }

    //Contagem decrescente
    if (i > f) {
      for (let c = i; c >= e; c -= s) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
