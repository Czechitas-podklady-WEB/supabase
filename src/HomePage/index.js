export const HomePage = (props) => {
  const { session } = props;

  if (!session) {
    window.location.href = '/login';
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
  <div class="container">
    <h1>Supabase app</h1>
  </div>`;

  return element;
};
