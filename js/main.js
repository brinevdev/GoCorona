const menuIcon = document.querySelector('.menu__icon');
const body = document.querySelector('body');

menuIcon.addEventListener('click',(e)=>{
    body.classList.toggle('active');
});