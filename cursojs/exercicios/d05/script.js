var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", adicionar);
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", finalizar);
let res = document.getElementById("res");
let numeros = [];

function isNumber(n) {
  if (n >= 1 && n <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (numeros.indexOf(n) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  let num = document.getElementById("txtn");
  let n = Number(num.value);
  let sel = document.getElementById("selectn");
  let option = document.createElement("option");

  if (!inLista(n, numeros) && isNumber(n)) {
    res.innerText = "";
    numeros.push(n);
    option.text = `Valor ${n} adicionado`;
    option.value = `sel${numeros.indexOf(n)}`;
    sel.appendChild(option);
  } else {
    alert("Valor inválido ou já encontrado na lista");
  }

  num.value = "";
  num.focus();    
}

function finalizar() {
  if (numeros.length == 0) {
    alert("Adicione números antes de finalizar");
  } else {
    let me = numeros[0];
    let ma = numeros[0];
    let s = 0;
    for (let pos in numeros) {
      if (me > numeros[pos]) {
        me = numeros[pos];
      }

      if (ma < numeros[pos]) {
        ma = numeros[pos];
      }

      s += numeros[pos];
    }
    let m = s / numeros.length;

    res.innerHTML = `<p> Ao todo, temos ${numeros.length} números cadastrados </p>
        <p>O maior valor informado foi ${ma}</p>
        <p>O menor valor informado foi ${me}</p>
        <p>Somando todos os valores, temos ${s}</p>
        <p>A média dos valores digitados é ${m}</p>`;
  }
}
