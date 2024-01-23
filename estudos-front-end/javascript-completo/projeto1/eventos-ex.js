// Quando o usuario clicar nos links internos do site
// Adicione a classe ativo ao item clicado e remova dos demais itens caso ele possuam a mesma. Previna comportamento padrao desses links

const linksInterno = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event) {
    event.preventDefault();
    linksInterno.forEach(function(link) {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.toggle('ativo');
}

linksInterno.forEach(function(link) {
    link.addEventListener('click', handleLinkInterno);
})

// Selecione todos os elementos do site comecando a partir do body, ao clique mostre exatamente quais elementos estao sendo clicados.

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    // console.log(event.currentTarget);
}

todosElementos.forEach(function(elemento) {
    elemento.addEventListener('click', handleElemento);
})

// Utilizando o codigo anterior, ao inves de mostrar no console, remova o elemento que esta sendo clicado, o metodo remove() remove um elemento.

function handleElemento(event) {
    // event.currentTarget.remove();
}

// Se o usuario clicar na tela (t), aumente todo o texto do site.

function handleClickT(event) {
    // console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);