// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

// Selecione o primeiro dt da dl de faq

const primeiroDt = document.querySelector('dl dt')

// Selecione o dd referente ao primeiro dt

const primeiroDd = document.querySelector('dl dd')

// Substitua o conteudo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML