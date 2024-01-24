const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>Fabricio</p>'; // Substitui o texto do H1 por '<p>Fabricio</p>'
h1.outerHTML = '<p>Fabricio</p>'; // Remove a tag H1 e adiciona a tag '<p>Fabricio</p>'

console.log(animaisLista.innerText);

// Tranversing
// Como navegar pelo DOM, utilizando suas propriedades e metodos

const lista = document.querySelector('.animais-lista');

lista.parentElement; // Retorna o pai 
lista.parentElement.parentElement // Retorna o pai do pai, e assim sucessivamente, ate o ultimo pai, que e o HTML
lista.previousElementSibling; // Retorna o elemento acima do selecionado
lista.nextElementSibling; // Retorna o elemento abaixo do selecionado

lista.children; // Retorna o HTMLCollection com os filhos
lista.children[0]; // Retorna o primeiro filho
lista.children[--lista.children.length]; // Retorna o ultimo filho

lista.querySelector('li') // Retorna todas as li
lista.querySelectorAll('li:last-child') // Retorna o ultimo filho

// Manipulando elementos

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

animais.appendChild(titulo); // move lista para o final de animais
contato.insertBefore(titulo, mapa); // dentro de contato, coloca o titulo antes do mapa
contato.replaceChild(h1, titulo); // dentro de contato o h1 substitui o titulo
contato.removeChild(h1); // dentro de contato, remove o h1

// Novos elementos
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');

contato.appendChild(novoH1);
console.log(novoH1);

// Clonar elementos
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);
