import { ShoppingList } from '../ShoppingList';

export const HomePage = (props) => {
  const { session } = props;

  if (!session) {
    window.location.href = '/login';
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Nákupní seznam</h1>
      <div class="lists"></div>
    </div>
  `;

  element.querySelector('.lists').append(ShoppingList({ session: session }));

  return element;
};
