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

//objednávání kávy

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');

/*let ordered = false;
orderBtn.addEventListener('click', () => {
  if (ordered === false) {
    orderBtn.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtn.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    ordered = false;
  }
});*/

//ingredience jako komponenty

import { Drink } from './Drink/index.js';

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

const drinksList = document.querySelector('.drinks-list');
for (let i = 0; i < drinks.length; i += 1) {
  drinksList.appendChild(Drink(drinks[i]));
}
