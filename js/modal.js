let sendBtn = document.querySelector('.input__btn');
let form = document.querySelector('.form__wrap');
const emailInput = document.querySelector('.form-modal__email');
let successMsg = document.querySelector('.form__success-message');
let errorMsg = document.querySelector('.form__error-message');
let howWeCanHelp = document.querySelector('.howWeCanHelp');
const nameInput = document.querySelector('.form-modal__name');
const subjectInput = document.querySelector('.form-modal__subject');
let isValid = true;
let nameError = document.querySelector('.name-input-errorMessage');
let emailError = document.querySelector('.email-input-errorMessage');
let subjectError = document.querySelector('.subject-input-errorMessage');

const validateEmail = () => {
   const emailValue = emailInput.value;
   const errorMessage = 'Please enter a valid email address.';

   if (!emailValue.includes('@')) {
      emailInput.classList.add('invalid');
      emailError.classList.add('errorMessage-visible');
      emailInput.setCustomValidity(errorMessage);
      return false;
   } else {
      emailInput.classList.remove('invalid');
      emailError.classList.remove('errorMessage-visible');
      emailInput.setCustomValidity('');
      return true;
   }
};

const validateName = () => {
   if (nameInput.value.trim() === '') {
      nameInput.classList.add('invalid');
      nameError.classList.add('errorMessage-visible');
      return false;
   } else {
      nameInput.classList.remove('invalid');
      nameError.classList.remove('errorMessage-visible');
      return true;
   }
};

const validateSubject = () => {
   if (subjectInput.value.trim() === '') {
      subjectInput.classList.add('invalid');
      subjectError.classList.add('errorMessage-visible');
      return false;
   } else {
      subjectInput.classList.remove('invalid');
      subjectError.classList.remove('errorMessage-visible');
      return true;
   }
};

const validInput = () => {
   return validateEmail() && validateName() && validateSubject();
};

function sendRequest() {
   let name = nameInput.value,
      email = emailInput.value,
      message = document.querySelector('.form-modal__message').value,
      subject = subjectInput.value;

   fetch('https://license.darmius.kz/mailsend', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
         'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Origin': null,
         'Accept-Encoding': 'gzip, deflate, br'
      },
      body: `id=retenholding.com&emailto=info@retenholding.com&name=${name}&email=${email}&subject=${subject}&message=${message}`
   })
      .then((response) => {
         form.classList.add('form--hidden');
         successMsg.classList.add('form__success-message--visible');
         howWeCanHelp.classList.add('form--hidden');
      })
      .catch((e) => {
         errorMsg.classList.add('form__success-message--visible');
      });
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   if (validInput()) {
      sendRequest();
   }
});
