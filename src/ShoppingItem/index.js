import './style.css';

export const ShoppingItem = (props) => {
  const { item } = props;
  const { id, product, amount, unit, done } = item;

  let checkClass = 'icon-nocheck';
  if (done) {
    checkClass = 'icon-check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount} ${unit}</div>
    <button class="btn-check item__btn ${checkClass}"></button>
  `;

  return element;
};
