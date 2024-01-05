const animais = document.getElementById('animais');
console.log(animais);

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

console.log(gridSection, contato);

// Seleciona todas UL's, retorna uma HTMLCOllection
const ul = document.getElementsByTagName('ul');
console.log(ul);

// Retorna o primeiro alemento
console.log(gridSection[0]);

// Retorna a primeira li do site
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

// Retorna a primeira ul do site
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

// Retorna o primeiro link interno do site que comeca com #
const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);

// Retorna todas as img que esta dentro da classe .animais
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index) {
    console.log(item);
})

// Transformando um HTMLcollection em array 
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item, index) {
    console.log(item)
})