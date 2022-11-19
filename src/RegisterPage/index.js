export const RegisterPage = (props) => {
  const { error } = props;

  let alert = '';

  if (error !== undefined) {
    alert = `<div class="alert">${error}</div>`;
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Registrovat</h1>
      ${alert}
      <form>
        <label class="form-field">
          E-mail: <input class="email-input" type="email" />
        </label>
        <label class="form-field">
          Heslo: <input class="password-input" type="password" />
        </label>
        <button type="submit">Registrovat</button>
      </form>
    </div>
  `;

  return element;
};
