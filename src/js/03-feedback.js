import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const formData = {};
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
const parsedData = JSON.parse(savedData);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

entryFormInput();

function onInput() {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';

}

function entryFormInput() {
  const savedlocalStorage = localStorage.getItem(STORAGE_KEY);

  if (savedlocalStorage) {
    refs.form.email.value = parsedData.email;
    refs.form.message.value = parsedData.message;
  }
}
