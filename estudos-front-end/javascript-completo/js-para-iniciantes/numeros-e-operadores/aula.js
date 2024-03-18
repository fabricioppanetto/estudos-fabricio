var exp = 2e7;
console.log(exp) 

var 
    soma = 100 + 50,
    subtracao = 100 - 50,
    multiplicacao = 100 * 2,
    divisao = 100 / 2,
    expoente = 2 ** 4,
    modulo = 14 / 5;

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo)

var testeNaN = "Isso é 100" / 2;
console.log(isNaN(testeNaN))

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10; //110
console.log(soma1)

var x = 5;
console.log(x++) // ++ significa +1
console.log(x)

var idade = "28";
var soma = 5;
console.log(+idade + soma) // adiciona o + antes de uma string, ele transforma em Number, mas somente se estiver números e espaços, se possuir alguma letra, não irá funcionar