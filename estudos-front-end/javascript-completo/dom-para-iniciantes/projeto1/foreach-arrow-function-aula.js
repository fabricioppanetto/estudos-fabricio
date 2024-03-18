// const imgs = document.querySelectorAll('img');
// console.log(imgs);
 
// let i = 0;
// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array);
// });

// Transformando em Array
const titulos = document.getElementsByClassName('titulo');
const titulosArrays = Array.from(titulos);

titulosArrays.forEach(function(item) {
    // console.log(item);
});


const imgs = document.querySelectorAll('img');
// console.log(imgs);
 
let i = 0;
imgs.forEach((item) => {
    console.log(item);
});
