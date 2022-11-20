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

  if (items === undefined) {
    getShopingItems(session.user.id).then((response) => {
      const { error, data } = response;
      if (error) {
      } else {
        element.replaceWith(
          ShoppingList({
            session: session,
            items: data,
          }),
        );
      }
    });

    return element;
  }

  const form = element.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productInput = document.querySelector('.product-input');
    const amountInput = document.querySelector('.amount-input');
    const unitInput = document.querySelector('.unit-input');
    addShoppingItem(
      productInput.value,
      amountInput.value,
      unitInput.value,
      session.user.id,
    ).then((response) => {
      const { error } = response;
      if (error) {
        console.log(error);
      } else {
        getShopingItems(session.user.id).then((response) => {
          const { error, data } = response;
          if (error) {
          } else {
            element.replaceWith(
              ShoppingList({
                session: session,
                items: data,
              }),
            );
          }
        });
      }
    });
  });

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
