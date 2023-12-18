'use strict'

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();
// console.log(carro);

{
    var carro2 = 'Audi';
    const ano = 2018;
}
console.log(carro2);
// console.log(ano);

// o var esta vazando pelo bloco, esta errado, com CONST e LET esse problema nao ocorre
var i = 50

for(let i = 0; i <= 10; i++) {
    console.log(`Numero ${i}`);
}

console.log(i * 5);

const semana = 'Sexta';
// semana = 'Quinta' vai dar erro na atribuicao
console.log(semana)

const data = {
    dia: 17,
    mes: 'Dezembro',
    ano: 2023,
}

data.dia = 18;
data.mes = 'Janeiro'
console.log(data)

let ano;
ano = 2016;
ano++;
console.log(ano)

// let ano = 2023; - ERRO, redeclarou a variavel 