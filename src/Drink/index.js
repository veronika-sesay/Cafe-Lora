import './style.css';

import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, ordered, layers, image } = props;
  const drinkProduct = document.createElement('div');
  drinkProduct.classList.add('drink');
  drinkProduct.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${image}"/>
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
    <button class="order-btn">Objednat</button>
    </div>
  `;
  const drinkInfo = drinkProduct.querySelector('.drink__info');
  layers.forEach((layer) => {
    drinkInfo.appendChild(Layer(layer));
  });
  return drinkProduct;
};
