//PROGRAMA DE CÁLCULO DO IMC

//var peso = prompt("Digite seu peso");
//var altura = prompt("Digite sua altura");

//var resultado = peso / (altura * altura);

//alert(resultado);

//PROGRAMA DE IDADE MINIMA

//var idade_minima = 18;
//var idade_pessoa = prompt("Digite aqui a sua idade");

//if (idade_pessoa >= idade_minima) {
//alert("Acesso autorizado");
//} else {
//alert("Acesso NÃO autorizado");
//}

//PROGRAMA DE CADASTRAMENTO DE SENHAS IGUAIS

//var a = prompt("Digite o primeiro valor aqui");
//var b = prompt("Digite o segundo valor aqui");

//if (a == b) {
//alert("Os números são iguais");
//} else {
//alert("Os números são diferentes");
//}

//var idioma = prompt("Digite aqui o código do seu idioma -pt-en-fr-es");

//if (idioma == "pt") {
//alert("Olá, você selecionou o idioma Português - Brasil");
//} else if (idioma == "en") {
//alert("Olá, você selecionou o idioma Ingês - Britânico");
//} else if (idioma == "fr") {
//alert("Olá, você selecionou o idioma Francês - França");
//} else if (idioma == "es") {
//alert("Olá, você selecionou o idioma Espanhol - Espanha");
//} else {
//alert("Código do idioma não reconhecido");
//}

//alert("Execução continua");

//var idioma = prompt(
//"Digite aqui o idioma que você deseja selecionar! pt-Português en-Ingês fr-Francês es-Espanhol"
//);

//if (idioma == "pt") {
//alert("Olá, você selecionou o idioma Português - Brasil");
//} else if (idioma == "en") {
//alert("Hi, you selected english language - American");
//} else if (idioma == "fr") {
//alert("Salut, vous avez sélectionné la langue française - France");
//} else if (idioma == "es") {
//alert(" Hola, seleccionaste el idioma españo - España");
//} else {
//alert("Código do idioma não reconhecido");
//}

//alert("Execução continua");

//var idioma = prompt("Digite aqui o código do idioma");
//var variacao = prompt("Digite a variação do idioma aqui");

//if (idioma == "pt" && (variacao == "br" || variacao == "pt")) {
//alert("Olá você selecionou o idioma Português");
//} else if (idioma == "en" && variacao == "us") {
//alert("Hi, you selected english language - American");
//} else if (idioma == "en" && variacao == "gb") {
//alert("Hello, you selected english language - Britânica");
//} else {
//alert("Idioma e/ou variação não reconhecido");
//}

//alert("Recarregue a página para selecionar outro idioma!");

//var contador = 1;

//while (contador <= 10) {
//console.log(contador + " Diogo");

//contador = contador + 1;
//}

//console.log("Fim da execução");

//var contador = 1;
//var limite = 10;

//while (contador <= limite) {
//console.log(contador + " Diogo Rochembach");

//contador = contador + 1;
//}

//console.log("Fim da Execução");

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

var n1 = Number(prompt("Número 1"));
var n2 = Number(prompt("Número 2"));
var op = prompt("Operação");

var resultado;

if (op == "+") {
  resultado = soma(n1, n2);
} else if (op == "-") {
  resultado = subtracao(n1, n2);
}

alert(resultado);
