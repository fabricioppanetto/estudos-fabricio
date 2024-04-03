const um = '123   9';

console.log(um.length)
console.log(um[um.length - 1])

const frase = 'A melhor linguagem e ';
const linguagem = 'JavaScript';

// const fraseFinal = frase + linguagem;
const fraseFinal = frase.concat(linguagem, '!');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('ana'));

const transacao1 = 'Deposito de cliente';
const transacao2 = 'Deposito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3));
console.log(transacao1.slice(0, -3));

// substring() is the same as slice(), but when you use the negative number, it doesn't work

console.log(fruta.indexOf('B'));
console.log(fruta.indexOf('a'));
console.log(fruta.indexOf('n'));

console.log(fruta.lastIndexOf('a'));
console.log(fruta.lastIndexOf('n'));


const nome = 'Fabricio';
const sobrenome = 'Panetto';
const cpf = '15222990761';

const usuarioPPPoE = (nome.slice(0) + cpf.slice(0,3));
console.log(usuarioPPPoE);
const senhaPPPoE = (sobrenome.slice(0) + cpf.slice(-3));
console.log(senhaPPPoE);

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1200'];
listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})

console.log(listaPrecos[0].padStart(10, '.'));
console.log(listaPrecos[0].padEnd(10, '.'));

const frase2 = 'ta';
console.log(frase2.repeat(4));

let listaItens = 'Camisas Bones Calcas Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const sexo1 = 'Masculino';
const sexo2 = 'masculino';
const sexo3 = 'MASCULINO';

console.log(sexo1.toUpperCase() === 'MASCULINO');

const valor = ' R$ 23.00 ';
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());
