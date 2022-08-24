import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
formElement.addEventListener('submit', submitActions);
formElement.addEventListener(
  'input',
  throttle(getFormValueAndSaveToLocalStorage, 500)
);

const emailInputRow = formElement.querySelector('[name="email"]');
const messageTextArea = formElement.querySelector('[name="message"]');

function getFormValueAndSaveToLocalStorage() {
  valueData = {
    email: emailInputRow.value,
    message: messageTextArea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(valueData));
}

function submitActions(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
