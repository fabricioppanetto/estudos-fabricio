const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// h1.innerHTML = '<p>Fabricio</p>'; Substitui o texto do H1 por '<p>Fabricio</p>'
// h1.outerHTML = '<p>Fabricio</p>'; Remove a tag H1 e adiciona a tag '<p>Fabricio</p>'

// console.log(animaisLista.innerText);

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