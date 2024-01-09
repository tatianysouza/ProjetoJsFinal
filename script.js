// Adicionando evento de clique ao botão e redefinindo o formulário
var botao = document.querySelector("#calcular");
botao.addEventListener("click", function(event) {
  event.preventDefault();
  form.reset();
});

// Questão 1
function media() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var media = (n1 + n2 + n3) / 3;
    document.getElementById("resultado").innerHTML = " Média: " + media
}

// Questão 2
function lado() {
    var l1 = parseFloat(document.getElementById("l1").value);
    var area = (l1 * l1);
    var perimetro = (l1 * 4);
    document.getElementById("result").innerHTML = "Área: " + area
    document.getElementById("resulta").innerHTML = "Perimetro: " + perimetro
}

// Questão 3
function num3() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var dobro = (n1 + n1);
    var triplo = (n1 + n1 + n1);
    var quadrado = (n1 ** 2);
    var cubo = (n1 ** 3);
    var raiz = Math.sqrt(n1);

    document.getElementById("result").innerHTML = "Dobro: " + dobro
    document.getElementById("resulta").innerHTML = "triplo: " + triplo
    document.getElementById("resultad").innerHTML = "Quadrado: " + quadrado
    document.getElementById("resultado").innerHTML = "Cubo: " + cubo
    document.getElementById("resul").innerHTML = "Raiz: " + raiz
}

// Questão 4
function num4() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var area = (3.14 * (n1 ** 2));
    var comprimento = ((2 * 3.14) * n1);

    document.getElementById("result").innerHTML = "Área: " + area
    document.getElementById("resulta").innerHTML = "Comprimento: " + comprimento
}

// Questão 5
function num5() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var area = ((n1 * n2) / 2);

    document.getElementById("result").innerHTML = "Área: " + area
}

// Questão 6
function num6() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var kelvin = (n1 + 273.15);
    var fahrenheit = (n1 * 1.8 + 32);

    document.getElementById("result").innerHTML = "Temperatura em Kelvin: " + kelvin
    document.getElementById("resulta").innerHTML = "Temperatura em Fahrenheit: " + fahrenheit
}

// Questão 7
function num7() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var a = (n1 ** 2);
    var b = (n2 ** 2);
    var x = (a + b)
    var hipotenusa = Math.sqrt(x);

    document.getElementById("result").innerHTML = "Hipotenusa: " + hipotenusa
}

// Questão 8
function num8() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var centimetros = (n1 * 2.54);

    document.getElementById("result").innerHTML = "Centimetros: " + centimetros
}

// Questão 9
function cont9() {
    var t1 = document.getElementById("t1").value;
    var text = t1;
    document.getElementById("result").innerHTML = "Tamanho: " + text.length + " letras";
}

// Questão 10
function num10() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var quilometros = (n1 / 1000);
    var hectometro = (n1 / 100);
    var decametro = (n1 / 10);
    var decimetro = (n1 * 10);
    var centimetro = (n1 * 100);
    var milimetro = (n1 * 1000);

    document.getElementById("resu").innerHTML = "Quilometros: " + quilometros
    document.getElementById("resul").innerHTML = "Hectometros: " + hectometro
    document.getElementById("result").innerHTML = "Decametros: " + decametro
    document.getElementById("resulta").innerHTML = "Decimetros: " + decimetro
    document.getElementById("resultad").innerHTML = "Centimetros: " + centimetro
    document.getElementById("resultado").innerHTML = "Milímetros: " + milimetro
}

// Questão 11
function num11() {
    var n1 = parseFloat(document.getElementById("n1").value);
    if (n1 % 2 == 0) {
        document.getElementById("result").innerHTML = "Número: Par"
    }
    else {
        document.getElementById("result").innerHTML = "Número: Impar"
    }
}

// Questão 12
function num12() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n1 % n2 == 0) {
        document.getElementById("result").innerHTML = "Número: Multiplo"
    }
    else {
        document.getElementById("result").innerHTML = "Número: Não Multiplo"
    }
}

// Questão 13
function num13() {
    var n1 = parseFloat(document.getElementById("n1").value);
    if (n1 > 0) {
        document.getElementById("result").innerHTML = "Número: Positivo"
    }
    else if (n1 < 0) {
        document.getElementById("result").innerHTML = "Número: Negativo"
    }
    else {
        document.getElementById("result").innerHTML = "Número: Neutro"
    }
}

// Questão 14
function num14() {
    var n1 = parseFloat(document.getElementById("n1").value);
    if (n1 >= 0 && n1 <= 12) {
        document.getElementById("result").innerHTML = "Criança";
    }
    else if (n1 >= 13 && n1 <= 17) {
        document.getElementById("result").innerHTML = "Adolescente";
    }
    else if (n1 >= 18 && n1 <= 59) {
        document.getElementById("result").innerHTML = "Adulto"
    }
    else {
        document.getElementById("result").innerHTML = "Idoso"
    }
}

// Questão 15
function num15() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if (n1 == n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Equilátero";
    }
    else if (n1 > n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Isóceles";
    }
    else if (n1 < n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n1 == n2 && n1 > n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n1 == n2 && n1 < n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n2 == n3 && n3 > n1) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n2 == n3 && n3 < n1) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else {
        document.getElementById("result").innerHTML = "Escaleno"
    }
}

// Questão 16
function num16() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if (n1 > n2 && n1 > n3) {
        document.getElementById("result").innerHTML = "O maior número é: " + n1;
    }
    else if (n2 > n1 && n2 > n3) {
        document.getElementById("result").innerHTML = "O maior número é: " + n2;
    }
    else if (n3 > n1 && n3 > n2) {
        document.getElementById("result").innerHTML = "O maior número é: " + n3;
    }
    else {
        document.getElementById("result").innerHTML = "Os números digitados são iguais"
    }
}
// Questão 17
function num17() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if (n1 > n2 && n1 > n3) {
        document.getElementById("resul").innerHTML = "O maior número é: " + n1;
    }
    else if (n2 > n1 && n2 > n3) {
        document.getElementById("resul").innerHTML = "O maior número é: " + n2;
    }
    else if (n3 > n1 && n3 > n2) {
        document.getElementById("resul").innerHTML = "O maior número é: " + n3;
    }
    else if (n1 < n2 && n1 < n3) {
        document.getElementById("result").innerHTML = "O menor número é: " + n1;
    }
    else if (n2 < n1 && n2 < n3) {
        document.getElementById("result").innerHTML = "O menor número é: " + n2;
    }
    else if (n3 < n1 && n3 < n2) {
        document.getElementById("result").innerHTML = "O menor número é: " + n3;
    }
    else {
        document.getElementById("resul").innerHTML = "Os números digitados são iguais"
    }
}

// Questão 18
function num18() {
    var n1 = parseFloat(document.getElementById("n1").value);
    if (n1 >= 0 && n1 <= 12) {
        document.getElementById("result").innerHTML = "Criança";
    }
    else if (n1 >= 13 && n1 <= 17) {
        document.getElementById("result").innerHTML = "Adolescente";
    }
    else if (n1 >= 18 && n1 <= 59) {
        document.getElementById("result").innerHTML = "Adulto"
    }
    else {
        document.getElementById("result").innerHTML = "Idoso"
    }
}

// Questão 19
function num19() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if (n1 == n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Equilátero";
    }
    else if (n1 > n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Isóceles";
    }
    else if (n1 < n2 && n1 == n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n1 == n2 && n1 > n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n1 == n2 && n1 < n3) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n2 == n3 && n3 > n1) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else if (n2 == n3 && n3 < n1) {
        document.getElementById("result").innerHTML = "Isóceles"
    }
    else {
        document.getElementById("result").innerHTML = "Escaleno"
    }
}

// Questão 20
function num20() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = document.getElementById("n3").value;
    var soma = (n1 + n2);
    var menos = (n1 - n2);
    var vezes = (n1 * n2);
    var dividir = (n1 / n2);

    if (n3 == "+") {
        document.getElementById("result").innerHTML = n1 + "+" + n2 + "=" + soma;
    }
    else if (n3 == "-") {
        document.getElementById("result").innerHTML = n1 + "-" + n2 + "=" + menos;
    }
    else if (n3 == "*") {
        document.getElementById("result").innerHTML = n1 + "*" + n2 + "=" + vezes;
    }
    else if (n3 == "x") {
        document.getElementById("result").innerHTML = n1 + "x" + n2 + "=" + vezes;
    }
    else if (n3 == "/") {
        document.getElementById("result").innerHTML = n1 + "/" + n2 + "=" + dividir;
    }
    else {
        document.getElementById("resul").innerHTML = "Erro! Insira valores válidos."
    }
}

// Função de estilo comum
function myFunction(x) {
    x.style.background = "#ccb6f0";
}
