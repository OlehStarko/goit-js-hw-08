import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

checkLocalStorage();

function onFormInput(evt) {
  const formData = new FormData(refs.form);
  const values = Object.fromEntries(formData.entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

function checkLocalStorage() {
  const dataLocalStorage = localStorage.getItem(STORAGE_KEY);
  const parseDataLocalStorage = JSON.parse(dataLocalStorage);

  if (dataLocalStorage) {
    refs.emailInput.value = parseDataLocalStorage.email;
    refs.textarea.value = parseDataLocalStorage.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.emailInput.value === '' && refs.textarea.value === '') {
    alert('Ви не ввели ваші дані');
    return;
  }
  if (refs.emailInput.value === '' || refs.textarea.value === '') {
    alert('Ви ввели НЕ всі дані');
    return;
  }
  const returnFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(returnFormData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
