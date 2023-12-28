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
console.log(gridSection[0])