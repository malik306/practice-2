const burger = document.querySelector('.nav-bar__burger');
function toggleBurger(){
    burger.classList.toggle('nav-bar__burger--toggle');
    burger.nextElementSibling.classList.toggle('nav-bar__list--toggle');
}