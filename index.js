function Converter() {

    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;
    var valorEmBitcoinD = valorEmDolarNumerico * 46.913;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
    "O resultado em Real é R$" +
    valorEmReal.toFixed(2) +
    " e em Bitcoin ₿" +
    valorEmBitcoinD.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {

    var valorElemento2 = document.getElementById("valor");
    var valor2 = valorElemento2.value;
    var valorEmDolar2 = parseFloat(valor2);
    var valorEmEuro = valorEmDolar2 * 0.85;
    var valorEmBitcoinD = valorEmDolar2 * 46.913;

    var elementoValorConvertido2 = document.getElementById("valorConvertido4");
    var valorConvertido4 =
    "O resultado em Euro é €" +
    valorEmEuro.toFixed(2) +
    " e em Bitcoin ₿" +
    valorEmBitcoinD.toFixed(2);
  elementoValorConvertido2.innerHTML = valorConvertido4;

}

function Converter3() {

    var valorElemento3 = document.getElementById("valor2");
    var valor3 = valorElemento3.value;
    var valorEmRealNumerico = parseFloat(valor3);
    var valorEmDolar = valorEmRealNumerico / 5;
    var valorEmBitcoinR = valorEmRealNumerico * 248.081;

    var elementoValorConvertido3 = document.getElementById("valorConvertido3");
    var valorConvertido3 =
    "O resultado em Dólar é U$" +
    valorEmDolar.toFixed(2) +
    " e em Bitcoin ₿" +
    valorEmBitcoinR.toFixed(2);
  elementoValorConvertido3.innerHTML = valorConvertido3;

}

function Converter4() {

    var valorElemento4 = document.getElementById("valor2");
    var valor4 = valorElemento4.value;
    var valorEmReal2 = parseFloat(valor4);
    var valorEmEuro2 = valorEmReal2 * 0.16;
    var valorEmBitcoinR = valorEmReal2 * 248.081;

    var elementoValorConvertido4 = document.getElementById("valorConvertido5");
    var valorConvertido5 =
    "O resultado em Euro é €" +
    valorEmEuro2.toFixed(2) +
    "e em Bitcoin ₿" +
    valorEmBitcoinR.toFixed(2);
  elementoValorConvertido4.innerHTML = valorConvertido5;

}