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
console.log(rect);

