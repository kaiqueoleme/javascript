function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = window.document.querySelector("input#txtano").value;
  var res = document.querySelector("div#res");
  if (fAno.length == 0 || fAno > ano) {
    alert("Verifique os dados novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");
    
    // Homem
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "img/crianca-masculino.jpg");
      }

      if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "img/jovem-masculino.jpg");
      }

      if (idade >= 21 && idade < 50) {
        // Adulto
        img.setAttribute("src", "img/adulto-masculino.jpg");
      }

      if (idade >= 50) {
        // Idoso
        img.setAttribute("src", "img/idoso-masculino.jpg");
      }
    }

    // Mulher
    if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "img/crianca-feminino.jpg");
      }

      if (idade >= 10 && idade < 21) {
        // Jovem
        img.setAttribute("src", "img/jovem-feminino.jpg");
      }

      if (idade >= 21 && idade < 50) {
        // Adulto
        img.setAttribute("src", "img/adulto-feminino.jpg");
      }

      if (idade >= 50) {
        // Idoso
        img.setAttribute("src", "img/idoso-feminino.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
