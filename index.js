var text = "Seu IMC &eacute;: ";

var total = [
    "E voc&ecirc; est&aacute; com magreza.",
    "E voc&ecirc; est&aacute; com o peso normal.",
    "E voc&ecirc; est&aacute; com sobrepeso.",
    "E voc&ecirc; est&aacute; com obesidade.",
    "Erro.",
  ];

  function calcimc() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
  };

  function status(){
    var imc = calcimc();
    if (imc <= 18.5) {
        var x = 0;       
    }
    else if (imc <= 24.9) {
        var x = 1;
    }
    else if (imc <= 30){
        var x = 2;
    }
    else if (imc > 30){
        var x = 3;
    }
    else {
        var x = 4;
    }
    return total[x];
  };

  function result() {
    document
    .querySelector('.imc')
    .innerHTML = text.concat(calcimc());
    document
      .querySelector('.resultado')
      .innerHTML = status();
  };
  
  window.onload = function() {
    document
      .querySelector('#calcular')
      .addEventListener('click', result);
  };