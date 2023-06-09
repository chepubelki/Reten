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

document.querySelectorAll('.main-form__tag').forEach(tag => {
   tag.addEventListener('click', () => {
      subject += ` ${tag.textContent.trim()}`;
      tag.classList.add('main-form__tag-checked');
      console.log(tag.classList);
   });
});

emailInput.addEventListener('blur', () => {
   const emailValue = emailInput.value;
   const errorMessage = 'Please enter a valid email address.';

   if (!emailValue.includes('@')) {
      emailInput.classList.add('invalid');
      emailError.classList.add('errorMessage-visible');
      emailInput.setCustomValidity(errorMessage);
   } else {
      emailInput.classList.remove('invalid');
      emailError.classList.remove('errorMessage-visible');
      emailInput.setCustomValidity('');
   }
});

const validInput = () => {
   emailInput.addEventListener('blur', () => {
      const emailValue = emailInput.value;
      const errorMessage = 'Please enter a valid email address.';
   
      if (!emailValue.includes('@')) {
         emailInput.classList.add('invalid');
         emailError.classList.add('errorMessage-visible');
         emailInput.setCustomValidity(errorMessage);
      } else {
         emailInput.classList.remove('invalid');
         emailError.classList.remove('errorMessage-visible');
         emailInput.setCustomValidity('');
      }
   });

   nameInput.addEventListener('blur', () => {
      if (nameInput.value.trim() === '') {
         nameInput.classList.add('invalid');
         nameError.classList.add('errorMessage-visible');
         isValid = false;
      } else {
         nameInput.classList.remove('invalid');
         nameError.classList.remove('errorMessage-visible');
         nameInput.setCustomValidity('');
      }
   })
   subjectInput.addEventListener('blur', () => {
      if (subjectInput.value.trim() === '') {
         subjectInput.classList.add('invalid');
         subjectError.classList.add('errorMessage-visible');
         isValid = false;
      } else {
         subjectInput.classList.remove('invalid');
         subjectError.classList.remove('errorMessage-visible');
         subjectInput.setCustomValidity('');
      }
   })
}

validInput();

nameInput.addEventListener('blur', () => {
   if (nameInput.value.trim() === '') {
      nameInput.classList.add('invalid');
      nameError.classList.add('errorMessage-visible');
      isValid = false;
   } else {
      nameInput.classList.remove('invalid');
      nameError.classList.remove('errorMessage-visible');
      nameInput.setCustomValidity('');
   }
})
subjectInput.addEventListener('blur', () => {
   if (subjectInput.value.trim() === '') {
      subjectInput.classList.add('invalid');
      subjectError.classList.add('errorMessage-visible');
      isValid = false;
   } else {
      subjectInput.classList.remove('invalid');
      subjectError.classList.remove('errorMessage-visible');
      subjectInput.setCustomValidity('');
   }
})

function sendRequest() {
   let name = document.querySelector('.form-modal__name').value,
      email = document.querySelector('.form-modal__email').value,
      message = document.querySelector('.form-modal__message').value;
   subject = document.querySelector('.form-modal__subject').value;

   fetch('https://license.darmius.kz/mailsend', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
         'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Origin': null,
         'Accept-Encoding': 'gzip, deflate, br'
      },
      body: `id=reten.com&emailto=chepubelki@gmail.com&name=${name}&email=${email}&subject=${subject}&message=${message}`
   })
      .then((response) => {
         console.log(response.json());
         form.classList.add('form--hidden');
         successMsg.classList.add('form__success-message--visible');
         howWeCanHelp.classList.add('form--hidden');
      })
      .catch((e) => {
         console.log(e);
         errorMsg.classList.add('form__success-message--visible');
      });
}

form.addEventListener('submit', (e) => {
   validInput();
   e.preventDefault();
   sendRequest();
});
