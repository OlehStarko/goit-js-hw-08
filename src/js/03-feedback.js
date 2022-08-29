import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

checkLocalStorage();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
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

  if (
    (refs.emailInput.value === '' || refs.emailInput.value === undefined) &&
    (refs.textarea.value === '' || refs.textarea.value === undefined)
  ) {
    alert('Ви не ввели ваші дані');
    return;
  }
  if (
    refs.emailInput.value === '' ||
    refs.emailInput.value === undefined ||
    refs.textarea.value === '' ||
    refs.textarea.value === undefined
  ) {
    alert('Ви ввели не всі дані');
    return;
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
