import { ShoppingItem } from '../ShoppingItem/index.js';
import { getShopingItems, addShoppingItem } from '../functions/db.js';
import './style.css';

export const ShoppingList = (props) => {
  const { session, items } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <ul class="shopping-list__items"></ul>
    <form>
      <label class="form-field">
        Produkt: <input class="product-input" type="text" />
      </label>
      <label class="form-field">
        Množství: <input class="amount-input" type="number" />
      </label>
      <label class="form-field">
        Jednotka: <input class="unit-input" type="text" />
      </label>
      <button type="submit">Přidat položku</button>
    </form>
  `;

  const ulElement = element.querySelector('ul');
  ulElement.append(
    ...items.map((item) =>
      ShoppingItem({
        item: item,
      }),
    ),
  );

  return element;
};
