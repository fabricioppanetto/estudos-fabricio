const img = document.querySelector('img');

// Exemplo 1
img.addEventListener('click', function() {
    // console.log('Clicou');
});

// Exemplo 2
function callback(event) {
    // console.log(event);
}

img.addEventListener('click', callback);

// Propriedades do Event
const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    const currentTarget = event.currentTarget;
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;
    // console.log(currentTarget, target, type, path);
}

imagensLista.addEventListener('click', callbackLista);

// event.preventDefault()
// Previne o comportamento padrao do evento no browser. No caso de um link externo, por exemplo, ira previnir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
    event.preventDefault();
    // console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

// Diferentes eventos
// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document tambem

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);
// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

// Keyboard 
// Voce pode adicionar atalhos para facilitar a navegacao no seu site, atraves de eventos do keyboard 

function handleKeyboard(event) {
    if(event.key === 'f') {
        document.body.classList.toggle('fullscreen')
    }
}

window.addEventListener('keydown', handleKeyboard);

// forEach
// O metodo addEventListener e adicionado a um unico elemento, entao e necessario um loop entre elementos de uma lista, para adicionarmos a cada um deles.

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach(function(img) {
    img.addEventListener('click', handleImg);
})