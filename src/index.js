import './style.css';

console.log('funguju!');

const navBtn = document.getElementById('nav-btn');
const nav = document.querySelector('nav');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

const navAll = document.querySelectorAll('nav a');
navAll.forEach((item) =>
  item.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  }),
);
