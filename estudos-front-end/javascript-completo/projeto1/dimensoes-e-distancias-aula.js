const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border 
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro do scroll

// Podemos usar essa propriedade com width tambem 

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;
console.log(h2Left);


const rect = primeiroH2.getBoundingClientRect();
console.log(rect.top);

if(rect.top < 0) {
    console.log('Voce passou do elemento');
};


console.log(
    window.innerWidth, // width da janela
    window.outerWidth, // soma dev tools tambem
    window.innerHeight, // height da janela
    window.outerHeight, // soma a barra de endereco
    
    window.pageYOffset, // distancia total do scroll horizontal
    window.pageXOffset, // distancia total do scroll vertical
);

if(window.innerWidth < 600) {
    console.log('Tela menor que 600px de largura');
};

if(window.innerHeight < 600) {
    console.log('Tela menor que 600px de altura');
};


const small = window.matchMedia('(max-width: 600px)').matches;
if(small) {
    console.log('Tela pequena');
} else {
    console.log('Tela grande');
}; 
