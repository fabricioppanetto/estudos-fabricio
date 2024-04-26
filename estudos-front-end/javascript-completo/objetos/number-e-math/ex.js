// Retorne um numero aleatorio entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio);

// Retorne o maior numero da lista abaixo

const numeros = '4, 5, 20, 9, 8';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma funcao para limpar os precos e retornar os numeros com centavos arredondados, depois retorne a soma total

const listaPreco = ['R$ 59,99', ' R$ 590,999', 'R$ 5999 ', 'r$ 59'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPreco.forEach((preco) => {
    soma += limparPreco(preco);
});

console.log(soma);

limparPreco(listaPreco[1]);