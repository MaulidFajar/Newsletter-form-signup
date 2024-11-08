const form = document.querySelector('#form');
const container = document.querySelector('.container');
const submitBtn = document.querySelector('.subtmit-btn');
const emailInput = document.querySelector('input');
const errorMsg = document.querySelector('.error-msg');
const successMsg = document.querySelector('.success-msg');
const userEmail = document.querySelector('.user-email');
const successBtn = document.querySelector('.msg-btn');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValue = emailInput.value
  const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(!emailValue.match(regex)) {
    emailInput.classList.add('error');
    errorMsg.innerHTML = 'Validate email required';
  } else {
    container.classList.add('hidden')
    successMsg.classList.remove('hidden');
    userEmail.innerHTML = emailValue;
  }
});

successBtn.addEventListener('click', () => {
  successMsg.classList.add('hidden');
  container.classList.remove('hidden')
  emailInput.value = "";
  errorMsg.innerHTML = "";
  emailInput.classList.remove('error');
})

