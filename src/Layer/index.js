import './style.css';

export const Layer = (props) => {
  const { color, label } = props;
  const drink = document.createElement('div');
  drink.classList.add('layer');
  drink.innerHTML = `
    <div class="layer__color" style="background-color:${color}"></div>
    <div class="layer__label">${label}</div>
  `;
  return drink;
};
