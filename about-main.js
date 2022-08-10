window.onload = () =>{
    let container = document.querySelector('.container-load');
    container.style.visibility = 'hidden';
    container.style.opacity = 0;
}
const selectElement = function (element){
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

const closeMenu = () =>{
    body.classList.remove('open');
}

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
})

// Scroll
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})