// Crie uma funcao que verifique corretamente o tipo de dado

function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
}

console.log(verificarDado([]));

// Crie um objeto quadrado com a propriedade lados e torne ela imutavel

const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
})


// Previna qualquer mudanca no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas as propriedades do prototipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));