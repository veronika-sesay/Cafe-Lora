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

let ordered = false;
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
});
