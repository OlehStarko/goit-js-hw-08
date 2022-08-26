// import throttle from 'lodash.throttle';

// const formElement = document.querySelector('.feedback-form');
// formElement.addEventListener('submit', submitActions);
// formElement.addEventListener(
//   'input',
//   throttle(getFormValueAndSaveToLocalStorage, 500)
// );

// const emailInputRow = formElement.querySelector('[name="email"]');
// const messageTextArea = formElement.querySelector('[name="message"]');

// function getFormValueAndSaveToLocalStorage() {
//   valueData = {
//     email: emailInputRow.value,
//     message: messageTextArea.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(valueData));
// }

// function submitActions(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }
// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();

// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// const formData = {};

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function onSubmitForm(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();
