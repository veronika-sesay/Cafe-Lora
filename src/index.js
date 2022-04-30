import './style.css';

console.log('funguju!');

//skrývání menu

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

//ingredience jako komponenty

import { Drink } from './Drink/index.js';

const drinks = fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const drinksList = document.querySelector('.drinks-list');
    for (let i = 0; i < data.results.length; i += 1) {
      drinksList.appendChild(Drink(data.results[i]));
    }
  });
