var nome = "Fabrício";
var idade = 20;
var time = null; 
console.log(typeof time)


var nome = "Fabrício";
var sobrenome = "Panetto"
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto)

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
// quando um número está dentro de uma string, ele sempre vai retornar em string, não em número
console.log(typeof frase)

var ano = "2023";
var mes = 10;
console.log(ano + mes);

var frase1 = "Esse é o 'melhor' jogo"
var frase1 = 'Esse é o "melhor" jogo'
var frase1 = "Esse é o \"melhor\" jogo"
var frase1 = `Esse é o 'melhor' jogo`

var gols = 1000;
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2)