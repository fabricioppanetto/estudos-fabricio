const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');
// Se tem uma class AZUL, ele remove, se nao tem, ele adiciona uma classe AZUL

if(menu.classList.contains('azul')) {
    menu.classList.add('possuiAzul');
} else {
    menu.classList.add('naoPossuiAzul');
}

menu.classList += ' vermelho ';

console.log(menu.className);

// console.log(menu.classList);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

img.setAttribute('alt', "it's a fox");
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(img.getAttribute('src'));
