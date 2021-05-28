const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar');
const closeMenuBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', (event) => {
  menu.classList.toggle('is-open');
})

closeMenuBtn.addEventListener('click', (event) => {
  menu.classList.toggle('is-open');
})
